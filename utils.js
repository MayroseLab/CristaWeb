

function send_sgrna_to_offtargets_form(sgrna_val){
	var url = "http://crista.tau.ac.il/findofftargets.html#form/sgRNA_seq=".concat(sgrna_val);
	window.location = url;
}


function send_sgrna_lst_to_multiofftargets_form(){
    var ul = document.getElementById("dynamic-list");
    var i=0;
    var st = "";
    while(ul.childNodes[i]){
        st = st.concat(ul.childNodes[i].id);
        st = st.concat(",");
        i++;
    }
    st = st.substring(0, st.length-1);
	var url = "http://crista.tau.ac.il/findofftargets_multipleRNAs.html#form/sgRNA_seqs=".concat(st);
	window.location = url;
}


function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}


function addItem(checkboxElem){
    var ul = document.getElementById("dynamic-list");
    var candidate = checkboxElem;
    var li = document.createElement("li");
    li.setAttribute('id',candidate.value);
    li.appendChild(document.createTextNode(candidate.value));
    ul.appendChild(li);
}

function removeItem(checkboxElem){
    var ul = document.getElementById("dynamic-list");
    var candidate = checkboxElem;
    var item = document.getElementById(candidate.value);
    ul.removeChild(item);

    if (!ul.childNodes[0]){
        hide_div_name("search_button");
    }
}

function addOrRemoveFromList(checkboxElem){
  if (checkboxElem.checked) {
    addItem(checkboxElem);
    show_div_name("search_button");
  } else {
    removeItem(checkboxElem);
  }

function show_div_name(div_id){
        var show = getElement( div_id );
        show.style.display = 'block';
}
//------------------------------------
function hide_div_name(div_id){
        var show = getElement( div_id );
        show.style.display = 'none';
}
