/*---------------------------------------------------------------------*/
/* ---------- [[[    MENU TOGGLE ON/OFF    ]]] ------------------------*/

$( "button" ).click(function() {
    var win = $(this); //this = window
    var size=$( "body" ).height();
    $("#menuBarBlack").css("height", size + "px");


    $( "#menuBarBlack" ).fadeToggle( "slow", "linear" );
    $( ".pos-f-t" ).fadeToggle( "slow", "linear" );
  });
/*------------------------------------------------------*/
  $( ".fadeToggle" ).click(function() {
    var win = $(this); //this = window
    var size=$( "body" ).height();
    $("#menuBarBlack").css("height", size + "px");


    $( "#menuBarBlack" ).fadeToggle( "slow", "linear" );
    $( ".pos-f-t" ).fadeToggle( "slow", "linear" );
  });


/*-------------------------------------------------------*/  
/* ---------- [[[    TABS    ]]] ------------------------*/
// function openHome() {
//     /* --------------CHANGE CSS STYLE----------------- */
//     /*TURN ON/OFF HOME TAB CONTENT/OTHER TAB CONTENT*/
//     $("#tabContent").css("display", "none");
//     $("#tabHome").css("display", "initial");

//     /* --------------CHANGE HTML ATTR----------------- */
//     /*CHANGE TAB ACTIVE/NONACTIVE LOOK*/
//     $("#homeTab").attr("class", "nav-item nav-link  active");
//     $("#codeTab").attr("class", "nav-item nav-link  unactive");
//     $("#photoTab").attr("class", "nav-item nav-link  unactive");
//     $("#illustrationTab").attr("class", "nav-item nav-link  unactive");
//     $("#mathWebsiteTab").attr("class", "nav-item nav-link  unactive");

// }

// function openCode() {

//     /* --------------CHANGE HTML ATTR----------------- */
//     $("#homeTab").attr("class", "nav-item nav-link  unactive");
//     $("#codeTab").attr("class", "nav-item nav-link  active");
//     $("#photoTab").attr("class", "nav-item nav-link  unactive");
//     $("#illustrationTab").attr("class", "nav-item nav-link  unactive");
//     $("#mathWebsiteTab").attr("class", "nav-item nav-link  unactive");
    
//     $("#homeTab2").attr("class", "unactiveTab");
//     $("#codeTab2").attr("class", "activeTab");
//     $("#photoTab2").attr("class", "unactiveTab");
//     $("#illustrationTab2").attr("class", "unactiveTab");
//     $("#mathWebsiteTab2").attr("class", "unactiveTab");

// }

// function openPhoto() {

//     /* ------------------------------------- */
//     $("#homeTab").attr("class", "nav-item nav-link  unactive");
//     $("#codeTab").attr("class", "nav-item nav-link  unactive");
//     $("#photoTab").attr("class", "nav-item nav-link  active");
//     $("#illustrationTab").attr("class", "nav-item nav-link  unactive");
//     $("#mathWebsiteTab").attr("class", "nav-item nav-link  unactive");

//     $("#homeTab2").attr("class", "unactiveTab");
//     $("#codeTab2").attr("class", "unactiveTab");
//     $("#photoTab2").attr("class", "activeTab");
//     $("#illustrationTab2").attr("class", "unactiveTab");
//     $("#mathWebsiteTab2").attr("class", "unactiveTab");

// }

// function openIllustration() {

//     /* ------------------------------------- */
//     $("#homeTab").attr("class", "nav-item nav-link  unactive");
//     $("#codeTab").attr("class", "nav-item nav-link  unactive");
//     $("#photoTab").attr("class", "nav-item nav-link  unactive");
//     $("#illustrationTab").attr("class", "nav-item nav-link  active");
//     $("#mathWebsiteTab").attr("class", "nav-item nav-link  unactive");

//     $("#homeTab2").attr("class", "unactiveTab");
//     $("#codeTab2").attr("class", "unactiveTab");
//     $("#photoTab2").attr("class", "unactiveTab");
//     $("#illustrationTab2").attr("class", "activeTab");
//     $("#mathWebsiteTab2").attr("class", "unactiveTab");

// }

// function openMathWebsite() {

//     /* ------------------------------------- */
//     $("#homeTab").attr("class", "nav-item nav-link  unactive");
//     $("#codeTab").attr("class", "nav-item nav-link  unactive");
//     $("#photoTab").attr("class", "nav-item nav-link  unactive");
//     $("#illustrationTab").attr("class", "nav-item nav-link  unactive");
//     $("#mathWebsiteTab").attr("class", "nav-item nav-link  active");

//     $("#homeTab2").attr("class", "unactiveTab");
//     $("#codeTab2").attr("class", "unactiveTab");
//     $("#photoTab2").attr("class", "unactiveTab");
//     $("#illustrationTab2").attr("class", "unactiveTab");
//     $("#mathWebsiteTab2").attr("class", "activeTab");


// }
