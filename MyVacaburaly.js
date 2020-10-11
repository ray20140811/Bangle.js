var index = 0;
var vacabulary = ['desert','endure','stingy','frugal'];

function outOfTime() {
    E.showMessage(vacabulary[0],"My Vacabulary");
    setTimeout(outOfTime, 10000);
    
}

function showMyVacabulary() {
  index--;
    if(index<0)
        index = vacabulary.length-1;
	g.clear();
    g.setFontAlign(0,0); // center font
    g.setFont("Vector",30); // vector font, 80px
	g.drawString(vacabulary[index],120,120);
	g.flip();
		      
}

counterInterval = setInterval(showMyVacabulary, 5000);
