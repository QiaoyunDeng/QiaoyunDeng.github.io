(function (global) {
    global.svgToImg = function (svgHtml) {
        this.svgHtml = svgHtml;
    };
    global.svgToImg.prototype = {
        /**
         * svgתͼƬ
         * @description
         * 1.��svgתbase64��
         * 2.��base64��ʽ��svgתָ����ͼƬ��ʽ������
         * @param fileName
         * ͼƬ����
         * @param imgType
         * ͼƬ���ͣ�jpg/png/bmp
         *
         */
        change: function (fileName, imgType) {
            var This = this;
            //1.��svg��ǩ������ԣ�version��xmlns
            [
                ['version', 1.1],
                ['xmlns', "http://www.w3.org/2000/svg"],
            ].forEach(function (item) {
                This.svgHtml.setAttribute(item[0], item[1]);
            });
            // 2.��ȡ��svg��ǩ+��ǩ�ڵ�����Ԫ��
            var str = This.svgHtml.parentNode.innerHTML;

            //3.����img
            var img = document.createElement('img');

            // 4.svg��ʽ��base64ͼ��
            img.setAttribute('src', 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(str))));
            //base64��ʽ��svg
            //document.getElementById('baseSvg').src='data:image/svg+xml;base64,'+ btoa(unescape(encodeURIComponent(str)));

            // 5.ת����ָ��ͼƬ��ʽ
            img.onload = function () {
                // 1.����canvas
                var canvas = document.createElement('canvas');
                var context = canvas.getContext("2d");

                canvas.width = img.width;
                canvas.height = img.height;
                // 2.����base64��ʽ��svg����canvas
                context.drawImage(img, 0, 0);

                // 3.��canvasת�ַ�������ָ���õ�ͼƬ��ʽ��
                var canvasData = canvas.toDataURL("image/" + imgType);
                // 4.����ͼƬԪ��
                var img2 = document.createElement('img');
                // 5.����ͼƬ
                img2.setAttribute('src', canvasData);

                // 6.���ظ�ͼƬ
                img2.onload = function () {
                    var a = document.createElement("a");
                    // ����
                    a.download = fileName + "." + imgType;
                    a.href = img2.getAttribute('src');
                    a.click();
                };
            };
        }
    }
}(this));
