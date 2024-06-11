function show() {
    
    var m =document.getElementById("profile")
    if (m.style.display === "none") {
      m.style.display = "block";
      
      } else {
        m.style.display = "none";
       
      }
    }
    function show_1(){
        var m =document.getElementById("alert")
        if(m.style.display==="none"){
            m.style.display="block";
        }
        else
        {
            m.style.display="none";
        }

    }

    // document.onclick=function(e){
    //     var m =document.getElementById("meesage")
    //     if (e.target.id !== 'meesage' ) {
    //         m.style.display="none";
    //     }
      
    // }

    // var myInput=document.getElementById("meesage"); 
    // myInput.onblur = function() {
    //     document.getElementById("meesage").style.display = "none";
    // }
    function show_3(){
        var m =document.getElementById("meesage")
        if(m.style.display==="none"){
            m.style.display="block";
        }
        else
        {
            m.style.display="none";
        }
       


    }

    function show_0(){
        var m =document.getElementById("menu")
        if(m.style.display==="none"){
            m.style.display="block";
            m.style.transitionTimingFunction="ease-in-out-in";
            // m.style.width="20%";
           
            
        }
        else
        {
            m.style.display="none";
            // m.style.width="20px";
            
        }

    }
    function show_4(){
        var m =document.getElementById("part1_12_1")
        if(m.style.display==="none"){
            m.style.display="block";
        }
        else
        {
            m.style.display="none";
        }

    }
    function show_5(){
        var m =document.getElementById("part1_12_2")
        if(m.style.display==="none"){
            m.style.display="flex";
        }
        else
        {
            m.style.display="none";
        }
        var x =document.getElementById("part1_12_22")
        if(x.style.display==="none"){
            x.style.display="flex";
        }
        else
        {
            x.style.display="none";
        }

    }
    function show_6(){
        var m =document.getElementById("part1_12_3")
        if(m.style.display==="none"){
            m.style.display="block";
        }
        else
        {
            m.style.display="none";
        }
        

    }
    function show_7(){
        var m =document.getElementById("part1_12_33")
        if(m.style.display==="none"){
            m.style.display="block";
        }
        else
        {
            m.style.display="none";
        }
        

    }
    function show_8(){
        var m =document.getElementById("part1_12_11")
        if(m.style.display==="none"){
            m.style.display="block";
        }
        else
        {
            m.style.display="none";
        }

    }
    function show_9(){
        var m =document.getElementById("part1_12_111")
        if(m.style.display==="none"){
            m.style.display="block";
        }
        else
        {
            m.style.display="none";
        }

    }
    function show_10(){
        var m =document.getElementById("part1_12_1111")
        if(m.style.display==="none"){
            m.style.display="block";
        }
        else
        {
            m.style.display="none";
        }

    }
    function show_11(){
        var m =document.getElementById("part1_12_11111")
        if(m.style.display==="none"){
            m.style.display="block";
        }
        else
        {
            m.style.display="none";
        }

    }
    function bili(){
        var m =document.getElementById("billing_page")
        var x =document.getElementById("notification_page")
        var r =document.getElementById("profile_page")
        var y =document.getElementById("security_page")
        
        m.style.display="block";
        x.style.display="none";
        r.style.display="none";
        y.style.display="none";


    }
    function noti(){
        var m =document.getElementById("billing_page")
        var x =document.getElementById("notification_page")
        var r =document.getElementById("profile_page")
        var y =document.getElementById("security_page")
        m.style.display="none";
        x.style.display="block";
        r.style.display="none";
        y.style.display="none";
        

    }
    
    function profile(){
        var m =document.getElementById("billing_page")
        var x =document.getElementById("notification_page")
        var r =document.getElementById("profile_page")
        var y =document.getElementById("security_page")
        m.style.display="none";
        x.style.display="none";
        r.style.display="block";
        y.style.display="none";
        

    }
    function security(){
        var m =document.getElementById("billing_page")
        var x =document.getElementById("notification_page")
        var r =document.getElementById("profile_page")
        var y =document.getElementById("security_page")
        m.style.display="none";
        x.style.display="none";
        r.style.display="none";
        y.style.display="block";
        

    }


    // const message = document.querySelector('#meesage')
    // message.addEventListener("blur", () => {
    //   message.style.display='none'
    // });
    

   
