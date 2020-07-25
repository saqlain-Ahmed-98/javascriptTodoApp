
var list=document.getElementById('list');

function getinp()
{
    
    var inptext=document.getElementById("inpText");
    
    var b=document.createElement('li');
    var oltxt=document.createTextNode(inptext.value);
    b.appendChild(oltxt);

    var delbtn=document.createElement('button');
    var deltxt=document.createTextNode("DELETE");
    delbtn.appendChild(deltxt);
    delbtn.setAttribute("onclick","deldata(this)");
    delbtn.setAttribute("class","btn btn-danger");

    b.appendChild(delbtn);

    var editbtn=document.createElement('button');
    var edittxt=document.createTextNode("EDIT");
    editbtn.appendChild(edittxt);
    editbtn.setAttribute("onclick","edidata(this)");
    editbtn.setAttribute("class","btn btn-danger");

    b.appendChild(editbtn);

    list.appendChild(b);


    inptext.value=""

}

function deldata(a)
{
    a.parentNode.remove();

}

function delall()
{
    list.innerHTML="";
}

function edidata(a)
{
    var getval=a.parentNode.firstChild.nodeValue;
    var edival=prompt("Enter Text!!",getval);
    a.parentNode.firstChild.nodeValue=edival;
    
}