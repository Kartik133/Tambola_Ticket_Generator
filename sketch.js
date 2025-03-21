var basic = [[1,3,5,7,9],[2,3,6,8,9],[1,3,4,7,8],[2,4,5,7,9],[1,3,5,6,9],[2,4,6,8,9],[1,3,5,6,8],[2,4,6,7,9],[2,4,5,7,9],[1,3,5,8,9],[1,2,4,6,8],[1,3,5,7,9],[2,4,6,7,9],[1,3,4,6,8],[2,3,5,7,8],[2,4,5,7,8],[1,3,5,6,8],[2,4,6,7,9]];
var ticket_image,tambola_ticket;
var button,button_10;

function preload() {
  ticket_image = loadImage("kitty_party.png");
  tambola_ticket = loadImage("Tambola.png");
}

function setup() {
  createCanvas(196.5*1.75,625*1.6);
  textAlign(CENTER);
  fill(0);

  button = createButton("Generate Ticket");
  button_10 = createButton("Generate 10 Ticket");
  button.position(343.875,50);
  button_10.position(343.875,100);
}

function draw() {
  button.mouseReleased(()=>{
   generateTicket();
  });
  button_10.mouseReleased(()=>{
   for(var i=0;i<10;i++) {
    generateTicket();
   }  
  });
}

function generateTicket() {
  var final = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
  var a,b,c,d,e,f,g,h,is,js,k,l,m,n,o,p,q,r;
  var y = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
   
  for(var j=0;j<basic.length;j++) {
    for(var i=0;i<5;i++){
      if(basic[j][i]==1) {
        var z = round(random(1,9));
        if(final.includes(z)==false) {
          final[(9*j+basic[j][i]-1)]=z;
        }else{
          i--;
        }
      }
      if(basic[j][i]==2) {
        var z = round(random(10,19));
        if(final.includes(z)==false) {
          final[(9*j+basic[j][i]-1)]=z;
        }else{
          i--;
        }
      }
      if(basic[j][i]==3) {
        var z = round(random(20,29));
        if(final.includes(z)==false) {
          final[(9*j+basic[j][i]-1)]=z;
        }else{
          i--;
        }
      }
      if(basic[j][i]==4) {
        var z = round(random(30,39));
        if(final.includes(z)==false) {
          final[(9*j+basic[j][i]-1)]=z;
        }else{
          i--;
        }
      }
      if(basic[j][i]==5) {
        var z = round(random(40,49));
        if(final.includes(z)==false) {
          final[(9*j+basic[j][i]-1)]=z;
        }else{
          i--;
        }
      }
      if(basic[j][i]==6) {
        var z = round(random(50,59));
        if(final.includes(z)==false) {
          final[(9*j+basic[j][i]-1)]=z;
        }else{
          i--;
        }
      }
      if(basic[j][i]==7) {
        var z = round(random(60,69));
        if(final.includes(z)==false) {
          final[(9*j+basic[j][i]-1)]=z;
        }else{
          i--;
        }
      }
      if(basic[j][i]==8) {
        var z = round(random(70,79));
        if(final.includes(z)==false) {
          final[(9*j+basic[j][i]-1)]=z;
        }else{
          i--;
        }
      }
      if(basic[j][i]==9) {
        var z = round(random(80,90));
        if(final.includes(z)==false) {
          final[(9*j+basic[j][i]-1)]=z;
        }else{
          i--;
        }
      }
    }
    }
  
   a = [final[0], final[1], final[2], final[3], final[4], final[5], final[6], final[7], final[8]];
   b = [final[9], final[10], final[11], final[12], final[13], final[14], final[15], final[16], final[17]];
   c = [final[18], final[19], final[20], final[21], final[22], final[23], final[24], final[25], final[26]];
   d = [final[27], final[28], final[29], final[30], final[31], final[32], final[33], final[34], final[35]];
   e = [final[36], final[37], final[38], final[39], final[40], final[41], final[42], final[43], final[44]];
   f = [final[45], final[46], final[47], final[48], final[49], final[50], final[51], final[52], final[53]];
   g = [final[54], final[55], final[56], final[57], final[58], final[59], final[60], final[61], final[62]];
   h = [final[63], final[64], final[65], final[66], final[67], final[68], final[69], final[70], final[71]];
   is = [final[72], final[73], final[74], final[75], final[76], final[77], final[78], final[79], final[80]];
   js = [final[81], final[82], final[83], final[84], final[85], final[86], final[87], final[88], final[89]];
   k = [final[90], final[91], final[92], final[93], final[94], final[95], final[96], final[97], final[98]];
   l = [final[99], final[100], final[101], final[102], final[103], final[104], final[105], final[106], final[107]];
   m = [final[108], final[109], final[110], final[111], final[112], final[113], final[114], final[115], final[116]];
   n = [final[117], final[118], final[119], final[120], final[121], final[122], final[123], final[124], final[125]];
   o = [final[126], final[127], final[128], final[129], final[130], final[131], final[132], final[133], final[134]];
   p = [final[135], final[136], final[137], final[138], final[139], final[140], final[141], final[142], final[143]];
   q = [final[144], final[145], final[146], final[147], final[148], final[149], final[150], final[151], final[152]];
   r = [final[153], final[154], final[155], final[156], final[157], final[158], final[159], final[160], final[161]];
  
   background(tambola_ticket);
    for(var i=0;i<18;i++) {
      var z = round(random(0,17));
      if(y.includes(z)==true) {
        switch(z){
          case 0: 
      for(var j=0;j<9;j++) {
          if(a[j]!=null){text(a[j],31.5+j*22.5,207+i*23+(Math.floor(i/3))*73);}
      }
      y[z]=null; 
      break;
  
  case 1: 
      for(var j=0;j<9;j++) {
          if(b[j]!=null){text(b[j],31.5+j*22.5,207+i*23+(Math.floor(i/3))*73);}
      }
      y[z]=null; 
      break;
  
  case 2: 
      for(var j=0;j<9;j++) {
          if(c[j]!=null){text(c[j],31.5+j*22.5,207+i*23+(Math.floor(i/3))*73);}
      }
      y[z]=null; 
      break;
  
  case 3: 
      for(var j=0;j<9;j++) {
          if(d[j]!=null){text(d[j],31.5+j*22.5,207+i*23+(Math.floor(i/3))*73);}
      }
      y[z]=null; 
      break;
  
  case 4: 
      for(var j=0;j<9;j++) {
          if(e[j]!=null){text(e[j],31.5+j*22.5,207+i*23+(Math.floor(i/3))*73);}
      }
      y[z]=null; 
      break;
  
  case 5: 
      for(var j=0;j<9;j++) {
          if(f[j]!=null){text(f[j],31.5+j*22.5,207+i*23+(Math.floor(i/3))*73);}
      }
      y[z]=null; 
      break;
  
  case 6: 
      for(var j=0;j<9;j++) {
          if(g[j]!=null){text(g[j],31.5+j*22.5,207+i*23+(Math.floor(i/3))*73);}
      }
      y[z]=null; 
      break;
  
  case 7: 
      for(var j=0;j<9;j++) {
          if(h[j]!=null){text(h[j],31.5+j*22.5,207+i*23+(Math.floor(i/3))*73);}
      }
      y[z]=null; 
      break;
  
  case 8: 
      for(var j=0;j<9;j++) {
          if(is[j]!=null){text(is[j],31.5+j*22.5,207+i*23+(Math.floor(i/3))*73);}
      }
      y[z]=null; 
      break;
  
  case 9: 
      for(var j=0;j<9;j++) {
          if(js[j]!=null){text(js[j],31.5+j*22.5,207+i*23+(Math.floor(i/3))*73);}
      }
      y[z]=null; 
      break;
  
  case 10: 
      for(var j=0;j<9;j++) {
          if(k[j]!=null){text(k[j],31.5+j*22.5,207+i*23+(Math.floor(i/3))*73);}
      }
      y[z]=null; 
      break;
  
  case 11: 
      for(var j=0;j<9;j++) {
          if(l[j]!=null){text(l[j],31.5+j*22.5,207+i*23+(Math.floor(i/3))*73);}
      }
      y[z]=null; 
      break;
  
  case 12: 
      for(var j=0;j<9;j++) {
          if(m[j]!=null){text(m[j],31.5+j*22.5,207+i*23+(Math.floor(i/3))*73);}
      }
      y[z]=null; 
      break;
  
  case 13: 
      for(var j=0;j<9;j++) {
          if(n[j]!=null){text(n[j],31.5+j*22.5,207+i*23+(Math.floor(i/3))*73);}
      }
      y[z]=null; 
      break;
  
  case 14: 
      for(var j=0;j<9;j++) {
          if(o[j]!=null){text(o[j],31.5+j*22.5,207+i*23+(Math.floor(i/3))*73);}
      }
      y[z]=null; 
      break;
  
  case 15: 
      for(var j=0;j<9;j++) {
          if(p[j]!=null){text(p[j],31.5+j*22.5,207+i*23+(Math.floor(i/3))*73);}
      }
      y[z]=null; 
      break;
  
  case 16: 
      for(var j=0;j<9;j++) {
          if(q[j]!=null){text(q[j],31.5+j*22.5,207+i*23+(Math.floor(i/3))*73);}
      }
      y[z]=null; 
      break;
  
  case 17: 
      for(var j=0;j<9;j++) {
          if(r[j]!=null){text(r[j],31.5+j*22.5,207+i*23+(Math.floor(i/3))*73);}
      }
      y[z]=null; 
      break;
  
        }
      }else{
        i--;
      }
    }
    saveCanvas('Tambola_Ticket.jpg');
}