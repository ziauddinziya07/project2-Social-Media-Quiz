var w, f, i, t, tt;
var t1, t2, t3, t4;
var st1, st2, st3;
var tt1, tt2, tt3;
var tt11, tt22, tt33;
tt1 = tt2 = tt3 = tt11 = tt22 = tt33 = false;

function start()
{
      document.querySelector("#welcome").style.display = "none";
      document.querySelector("#mainDiv").style.display = "block"; 
}

function ques1()
{
      w = document.querySelector("#W").checked;
      f = document.querySelector("#F").checked;
      i = document.querySelector("#I").checked;
      t = document.querySelector("#T").checked;
      tt = document.querySelector("#TT").checked;
      if ( w || f || i || t || tt )
      {
            document.querySelector("#mainDiv").style.display = "none";
            document.querySelector("#secDiv").style.display = "block";
      }
      else
      {
            document.querySelector("#warn1").innerHTML = "Please choose atleast one option !!!";
      }
}

function ques2()
{
      t1 = document.querySelector("#t1").checked;
      t2 = document.querySelector("#t2").checked;
      t3 = document.querySelector("#t3").checked;
      t4 = document.querySelector("#t4").checked;
      
      if ( t1 || t2 || t3 || t4 )
      {
            document.querySelector("#secDiv").style.display = "none";
            document.querySelector("#thiDiv").style.display = "block"; 
      }
      else
      {
            document.querySelector("#warn2").innerHTML = "Please choose atleast one option !!!";
      }     
}

function tik1()
{
      st1 = document.querySelector("#st1").checked;
      st2 = document.querySelector("#st2").checked;
      st3 = document.querySelector("#st3").checked;

      if ( st1 || st2 || st3 )
      {
            document.querySelector("#thiDiv").style.display = "none"; 
            if ( tt )      document.querySelector("#tikDiv1").style.display = "block"; 
            else
            {
                  document.querySelector("#resDiv").style.display = "block";
                  res();
            }
      }
      else
      {
            document.querySelector("#warn3").innerHTML = "Please choose atleast one option !!!";
      }     
}

function tik2()
{ 
      tt1 = document.querySelector("#tt1").checked;
      tt2 = document.querySelector("#tt2").checked;
      tt3 = document.querySelector("#tt3").checked;

      if ( tt1 || tt2 || tt3 )
      {
            document.querySelector("#tikDiv1").style.display = "none";
            document.querySelector("#tikDiv2").style.display = "block";  
      }
      else
      {
            document.querySelector("#warn4").innerHTML = "Please choose atleast one option !!!";
      }      
}

function res()
{
      if ( tt )
      {
            tt11 = document.querySelector("#tt11").checked;
            tt22 = document.querySelector("#tt22").checked;
            tt33 = document.querySelector("#tt33").checked;

            if ( tt11 || tt22 || tt33 )
            {
                  document.querySelector("#tikDiv2").style.display = "none";
                  document.querySelector("#resDiv").style.display = "block";
            }
            else
            {
                  document.querySelector("#warn5").innerHTML = "Please choose atleast one option !!!";
            }
      }
      
      if ( tt )
      {            
            document.querySelector("#img").setAttribute("src", "smiley3.png");
            if ( t4 )
            {
                  document.querySelector("#resMsg").style.color = "orange";
                  document.querySelector("#resMsg").innerHTML = "Instead of improoving your technical Knowlwdge, you are wasting your precious time in Tik - Tok !!!!!";
            }
            else if ( t3 )
            {
                  document.querySelector("#resMsg").style.color = "red";
                  document.querySelector("#resMsg").innerHTML = "Instead of improoving your technical Knowlwdge, you are wasting your precious time in Tik - Tok !!!!!";
                  document.querySelector("#resDiv").style.borderColor = "orange";            
            }
            else if ( (t1 || t2) && !(tt11 || tt22) )
            {
                  document.querySelector("#resMsg").style.color = "red";
                  document.querySelector("#resMsg").innerHTML = "You are a person who don't know about the Time - Importance and wasting your precious time in Tik - Tok !!!!!";
                  document.querySelector("#resDiv").style.borderColor = "orange";  
            }
            else
            {
                  document.querySelector("#resMsg").style.color = "red";
                  document.querySelector("#resMsg").innerHTML = "You are a fool who is wasting precious time in Tik - Tok !!!!!";
                  document.querySelector("#resDiv").style.borderColor = "red"; 
            }

      }
      else 
      {
            if ( t1 )
            {
                  document.querySelector("#img").setAttribute("src", "smiley3.png");
                  document.querySelector("#resMsg").style.color = "red";
                  document.querySelector("#resMsg").innerHTML = "You are a fool who is wasting precious time in Useless works !!!!!";
                  document.querySelector("#resDiv").style.borderColor = "red";                                    
            }
            else if ( t2 && (st1 || st2) )
            {
                  document.querySelector("#img").setAttribute("src", "smiley3.png");
                  document.querySelector("#resMsg").style.color = "red";
                  document.querySelector("#resMsg").innerHTML = "You are a fool who is wasting precious time in watching others works !!!!!";
                  document.querySelector("#resDiv").style.borderColor = "orange";                  
            }            
            else if ( t2 && t )
            {
                  document.querySelector("#img").setAttribute("src", "smiley2.png");
                  document.querySelector("#resMsg").style.color = "white";
                  document.querySelector("#resDiv").style.borderColor = "orange";    
                  document.querySelector("#resMsg").innerHTML = "You are a hungry person of Technology !!!!!";
            }
            else if ( t2 )
            {
                  document.querySelector("#img").setAttribute("src", "smiley3.png");
                  document.querySelector("#resMsg").style.color = "orange";
                  document.querySelector("#resMsg").innerHTML = "You are a person who don't know about the time importance and wasting precious time in Social Media !!!!!";
                  document.querySelector("#resDiv").style.borderColor = "orange";                   
            }
            else if ( t3 && (st1 || st2) )
            {
                  document.querySelector("#img").setAttribute("src", "smiley3.png");
                  document.querySelector("#resMsg").style.color = "orange";
                  document.querySelector("#resMsg").innerHTML = "You are a person who don't know how to utilize the time and wasting precious time in watching others works !!!!!";
            }
            else if ( t3 )
            {
                  document.querySelector("#img").setAttribute("src", "smiley2.png");
                  if ( f && i )     document.querySelector("#resMsg").innerHTML = "You should not waste your time in Facebook and InstaGram !!!!!";
                  else if ( f )     document.querySelector("#resMsg").innerHTML = "You should not waste your time in Facebook !!!!!";
                  else if ( i )     document.querySelector("#resMsg").innerHTML = "You should not waste your time in InstaGram !!!!!";
                  else     document.querySelector("#resMsg").innerHTML = "You are a person who knows how to use Technology !!!!!";
            }
            else
            {                  
                  document.querySelector("#img").setAttribute("src", "smiley1.png");
                  document.querySelector("#resMsg").innerHTML = "You are a person who knows how to use Technology !!!!!";
            }
      }
      setTimeout(function() {document.querySelector("#lab").innerHTML = "Note: Please don't take this comment with serious !";}, 2000);
      
}
