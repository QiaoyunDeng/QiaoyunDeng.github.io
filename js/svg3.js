 var svgToImg;
  window.onload = function () {
    // ��ȡ��svg��ǩ
    var svg = document.querySelector('svg');
    // ʵ��������
    svgToImg = new svgToImg(svg);
  }

  // ����
  function change() {
    // svgתͼƬ
    console.log(11);
    svgToImg.change('Marydon', 'jpg');
  }
  
  function svg2jpg() {
    // svgתͼƬ
    console.log(11);
    svgToImg.change('Marydon', 'jpg');
  }
  function svg2png() {
    // svgתͼƬ
    console.log(11);
    svgToImg.change('Marydon', 'png');
  }
  function svg2tiff() {
    // svgתͼƬ
    console.log(11);
    svgToImg.change('Marydon', 'tiff');
  }
