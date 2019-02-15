var Pirate={
  "hello": [{"ahoy": "greeting"},
            {"good morrow": "greeting"},  //or goodbye depending on time of day
            {"ho there": "greeting"}, //__+name if remembered
            {"I give you hearty greeting": "greeting"},
            //{"I joy heartily to see thee": "greeting"}, //SUPER fond
            {"top of the day to you": "greeting"}],

  "nice to meet": [{"you come in a fair breeze": "good to see you"},
    {"I'm glad for to clap eyes on you": "good to see you"},
    {"I'm pleased to make your acquaintance": "nice to meet you"},
    {"pleased I am to meet you": "nice to meet you"},
    {"right pleased to meet ya": "nice to meet you"}],

  "hello again": [{"'tis joy to see thee again": "good to see you"}, //obviously with fondness and unexpected
    {"If it aren't _": "greeting"}, //upon recognition
    {"it be none other than _": "greeting"} //encountering a friend after a long time unexpectedly
    ],

  "my name": [{"_ I am": "my name is"},
    {"I am called _": "my name is"},
    {"I am the pirate _": "my name is"},
    {"I be _": "my name is"},
    {"I'm _, I am!": "my name is"}, //could be used as other than as well
    {"_ is me": "my name is"},
    {"_ is the name": "my name is"},
    //{"it be me": "my name is"}, // if it's been a long time or they dont recognize
    {"know me for _": "my name is"}, //more like name plus title or claim to fame
    {"my handle be _": "my name is"},
    //{"name o' _, says my sponsors in baptism": "my name is"}, // or says the nicknamer
    {"_'s the name": "my name is"},
    {"_, that's me": "my name is"},
    {"_ they calls me": "my name is"},
    {"_ they names me": "my name is"},
    {"you see before you _": "my name is"},
    {"you might call me _": "my name is"}],

  "your name": [{"how are ye called?": "what is your name"}, // __,lad
    //"how is s/he named?": "what is their name",
    {"what might you call yourself?": "whats your name"},
    {"what might your name be?": "whats your name"},
    {"what be your name?": "whats your name"},
    {"who be you?": "who are you"},
    {"who be you, who and what?": "who are you"},
    {"who might you be?": "who are you"},
    {"and you be?": "who are you"}],

  "bye": [{"fare ye well": "farewell"},
    //{"fortune with you and yours": "farewell"},
    {"good fortune attend ye": "farewell"},
    {"good luck to 'ee": "farewell"},
   // {"I bid you farewell for the nonce": "farewell"}, //for now, wishing to se again
    //{"I bid you good-day": "farewell"},
    //{"here our ways divide": "goodbye"}, //farewell but more permanent/long
   // {"I take my leave of you": "goodbye"}, // not a nice one
   // {"I wish you a fair wind ever and always"}: "farewell", //good jounrey, good fortune, well-being
    //{"I'll be wishing you a very good day"}: "goodbye",
    //{"it's a very good night/day I'll be wishing you"}: "goodbye",
    {"joy go with you": "farewell"},
    //{"our courses'll cross again sometime"}: "farewell", //in hopes or liklihood of seeing again
   // {"our wakes'll cross again some day"}: "farewell", //in hopes or liklihood of seeing again
    //{"soft repose and pleasant dreams"}: "goodnight"
         ],

  "whats up": [{"how be ye?": "how are you"},
    {"how's the wind?": "how are you"},
    {"how d'ye do?": "how are you"},
    {"I hope I see you well": "how are you"}, // really "I hope you're well"
    {"how fares your day?": "whats up"}, //hows it goin
    {"how goes it?": "whats up"}, //how goes it
    {"how is't with you?": "whats up"}, // hows it goin response
    {"speak me your tidings": "whats up"},
    {"tell what's chanced you": "whats up"},
    //{"what's acting?": "whats up"},
    {"what's doing?": "whats up"},
    {"what's the word?": "whats up"}, //more information than real greeting
    {"what ho?": "whats up"},
    {"how now": "whats up"} //___messmate!
    ],
};

var pirates=[
    {"language":{"hello":"ahoy",
                 "nice to meet": "right pleased to meet ya",
                 "hello again": "If it aren't _",
                 "my name": "_ they names me",
                 "your name": "and you be?",
                 "bye": "fare ye well",
                 "whats up": "what's the word?"},
     "knowledge": {"you":{"met":false, "your name":undefined}},
     "name": "Captain Kaiya",
     "visual":{"head":"https://dl.dropbox.com/s/7ncamzafmb3newl/head_capn.png?dl=0",
               "body":"https://dl.dropbox.com/s/9brv9rppob84heg/body_capn.png?dl=0",
               "skin":"#e2bf9a",
               "clothes":"#272b27"}
    }// captain kaiya
];//pirates json

var yourName = "Nonyabiz";
var html= "";
var html2="";
var youvesaid= [];
var record= [];
var ongoing= false;
var chatHeight= $(window).height()*3;

var partner= pirates[0];
var changes=[0, 1, 2, 3, [4]];

function generateName(){
  var adj=["", 'Scuppering', 'Scallywag', "Swashbucklin'", 'Long', "Rogue", "Wildcat", "Honorable", "Sleepy", "Calico", "Mad", "Grubby", "Fancypants", "Money Buckets", "PegLeg", "Surly", "Plunderin'", "Fishface", "Jolly", "One Eyed", "Barnacle", "Fishmongerin'", "Kid", "Scarlet", "Red", "Blue", "Periwinkle", "Green", "Yella", "Scaredey", "Old", "Young", "Honkin'", "Blind", "Tiny", "Big", "Sneerin'", "Howlin'", "Jeerin'", "Landlubbing", "Cannon", "Shady", "Shipwreck", "Stubby", "Puffy", "Crusty", "Lobster", "Lady", "Cursed", "Intrepid", "Ghostly", "Laughing", "Noble", "Sapphire", "Savvy", "Miss", "Gangplank", "Marvelous","Sandy", "Messy", "Stinky", "Deadly", "Jumpin'", "Sweet", "Little", "Hairy", "Mister", "Merry", "Stormy", "Crabby", "High", "Fishy", "Crazy", "Lusty", "Rusty", "Bigmouth", "Quiet", "Lazy", "Short", "Singin'", "Melodic"];
  var secn=["","Billy", "Bailey", "Jack", "Kate", "Kid", "d'Plank", "Scarlet", "O'Patches", "Landlubber", "Cooper", "Sparrow", "O'Greedy", "Jackson", "Jones", "Sharkbait", "John", "Jim", "Boot", "Silver", "Pete", "Sanchez", "Fortune", "Oaf", "Maid", "Sandy", "Mary", "Ruth", "Diana", "Sara", "Jeff", "Harry", "McGee", "Crow", "Joe", "Nick", "Sam", "C.", "Z.", "Ash", "Alex", "Brook", "Caelan", "Campbell", "Charlie", "Chris", "Dana", "Frankie", "Glen", "Gray", "Harper", "Jamie", "Jayden", "Jean", "Jesse", "Jordan", "Jules", "Kelly", "Landry", "Logan", "Mason", "Monroe", "Morgan", "Parker", "Quinn", "Reed", "Reese", "Remy", "Riley", "River", "Roan", "Rory", "Rowan", "Ryan", "Sage", "Sam", "Sawyer", "Stevie", "Sydney", "Tatum", "Toby", "Tyler", "Val", "West", "Winter", "North", "East", "South", "Cotton", "Danny", "Phil"];
  changes=[0, 1, 2, 3, [4]];

  var first= Math.floor(Math.random()*adj.length);
  var second= Math.floor(Math.random()*secn.length);

  //attach to names later, changes=['head-0', 'skin-1', body-2, clothes-3, ['language-4']]
  switch (adj[first]){
   case "":
      changes[4][0]= {"confirm name":"Just _"};
      changes[4].push({"my name": "name o' _, says my sponsors in baptism"});
      break;
    case "Landlubbing":
      changes[4][0]= '"I am new to the seas!"';
      break;
    case "PegLeg":
      var pegleg= ["https://dl.dropbox.com/s/5ui9hbdjtqahwcj/body_1.png?dl=0", "https://dl.dropbox.com/s/qp0gystygsu73s5/body_pegleg_1.png?dl=0", "https://dl.dropbox.com/s/02wp5tf7bxuuyk0/body_pegleg_2.png?dl=0"];
      changes[2]= pegleg[Math.floor(Math.random()*pegleg.length)];
      break;
    case "One Eyed":
    case "Blind":
      var patch= ["https://dl.dropbox.com/s/hh3jnhe03ayfvd0/head_5.png?dl=0", "https://dl.dropbox.com/s/og8a2qa2j5gi1oq/head_7.png?dl=0", "https://dl.dropbox.com/s/qf6019jzua3ywdx/head_17.png?dl=0"];
      //seperate glasses and eye patches
      changes[0]= patch[Math.floor(Math.random()*patch.length)];
      break;
    case "Ghostly":
      changes[1]= "#cbdbda";
      break;
  }

  var name= adj[first] +" " +secn[second];
  $(".name").html(name);
  return name;
}//end name generator

function generateImage(){
  var bodyset=["https://dl.dropbox.com/s/5ui9hbdjtqahwcj/body_1.png?dl=0", "https://dl.dropbox.com/s/o4u577o3nfdnd6y/body_2.png?dl=0", "https://dl.dropbox.com/s/t3axlcwcccurver/body_3.png?dl=0", "https://dl.dropbox.com/s/e7mwjmo8jqxsxs2/body_4.png?dl=0", "https://dl.dropbox.com/s/4im2sd01ehusnbh/body_5.png?dl=0", "https://dl.dropbox.com/s/jpkgkx19a2xbnox/body_6.png?dl=0", "https://dl.dropbox.com/s/ttdp8hkxlee1qyo/body_7.png?dl=0", "https://dl.dropbox.com/s/ow4nf3vbcz37e4x/body_8.png?dl=0", "https://dl.dropbox.com/s/m91z7926adn0g2l/body_9.png?dl=0", "https://dl.dropbox.com/s/ndoxy8rin33keiq/body_10.png?dl=0"];
  var headset=["https://dl.dropbox.com/s/024inzuvkggct67/head_1.png?dl=0", "https://dl.dropbox.com/s/g9rdvqjbtg3kn3x/head_2.png?dl=0", "https://dl.dropbox.com/s/tv5q3vle8scnoy4/head_3.png?dl=0", "https://dl.dropbox.com/s/axsqurqpgk6zjrb/head_4.png?dl=0",  "https://dl.dropbox.com/s/2z7e3ledxgu1rxu/head_6.png?dl=0",  "https://dl.dropbox.com/s/43k25iq65diibsw/head_8.png?dl=0", "https://dl.dropbox.com/s/sa3048hwkki6dq4/head_9.png?dl=0", "https://dl.dropbox.com/s/x8c61vpbaov9p2m/head_10.png?dl=0", "https://dl.dropbox.com/s/qkm0mhaf9v557oq/head_11.png?dl=0", "https://dl.dropbox.com/s/9vs77fsyar3be4c/head_12.png?dl=0", "https://dl.dropbox.com/s/16iplb6fuqg3924/head_13.png?dl=0", "https://dl.dropbox.com/s/y31t6qqvaqep3is/head_14.png?dl=0", "https://dl.dropbox.com/s/98wst4wv2uubqop/head_15.png?dl=0", "https://dl.dropbox.com/s/gx6wcz080jtyljd/head_16.png?dl=0", "https://dl.dropbox.com/s/qf6019jzua3ywdx/head_17.png?dl=0"];
  //"https://dl.dropbox.com/s/og8a2qa2j5gi1oq/head_7.png?dl=0", "https://dl.dropbox.com/s/hh3jnhe03ayfvd0/head_5.png?dl=0",
  var skinset=["#e2bf9a", "#ebdac8", "#bb9062", "#a57c51", "#916434", "#78522a", "#7c4b17", "#583510", "#e8d1a0", "#432606", "#311a01", "#ddc184", "#c7ab6e", "#b2965a", "#907437", "#896820"];
  var clothesset=["#735a93", "#9541fe", "#3d0089", "#d2a1d1", "#a03b9f", "#e356e1", "#550154", "#e6527f", "#d71f57", "#b40339", "#820128", "#ca1919", "#4d0a0a", "#502727", "#4a3737", "#684c4c", "#eb936c", "#d06b3e", "#d84d0f", "#3d1300", "#b59b5e", "#857141", "#b8943d", "#c79316", "#886000", "#c2c435", "#a7c578", "#afe25e", "#7aaf26", "#568c00", "#315001", "#013704", "#aeb8ae", "#69746a", "#272b27", "#288c5e", "#77a690", "#75d8ab", "#01a65a", "#007a42", "#003f22", "#9bdbd9", "#68bdba", "#2f8b88", "#026a66", "#003432", "#6d92bf", "#abc9ee", "#5297ed", "#2b67b2", "#0e4283", "#002450", "#6965eb", "#343376", "#040271"];

  var body= bodyset[Math.floor(Math.random()*bodyset.length)];
  var head= headset[Math.floor(Math.random()*headset.length)];
  var skin= skinset[Math.floor(Math.random()*skinset.length)];
  var clothes= clothesset[Math.floor(Math.random()*clothesset.length)];


  if(changes[0]!= 0){ head= changes[0]; }
  else if(changes[1]!=1){ skin= changes[1]; }
  else if(changes[2]!=2){ body= changes[2]; }
  else if(changes[3]!=3){clothes= changes[3]; }

  var set= [head, skin, body, clothes];
  return set;
}//end character image generator

function generatePersonality(name, image){
  var general= ["hello", "nice to meet", "hello again", "my name", "your name", "bye", "whats up"];
  var returned= [];

  //MB type
  var mbti= [];
 for(p=0; p<4; p++){
    var percentage= Math.floor(Math.random()*101);
    if(p==0 && percentage<50){
      //percentage= (50-percentage)/50;
      mbti.push("I"+percentage);
    }
    else if(p==0 && percentage>=50){
      //percentage= (percentage-49)/50;
      mbti.push("E"+percentage);
    }
  }


  for(j=0; j<general.length; j++){
    var grab= Pirate[general[j]][Math.floor(Math.random()*(Pirate[general[j]].length))];
    returned.push(Object.keys(grab).toString());
  }

  var language= {};
  for(k=0; k<general.length; k++){
    language[general[k]]= returned[k];
  }
  language.mbti= mbti[0];

  return language;
}//end generate personality

function pirateLogic(input){

  if(partner.knowledge.you.met!==true && ongoing===false){
    html+= npcSaid(partner.language.hello);
    ongoing=true;
    place();
  }
  else if(partner.knowledge.you.met===true && ongoing===false){
    //html+= npcSaid(partner.language["hello again"]);
    html+= npcSaid(partner.language["whats up"]);
    ongoing=true;
    place();
  }
  else if(input=="mbti"){
    html+= npcSaid("My type is: "+partner.language.mbti);
    place();
  }
  else if(ongoing===true){
    switch(input){
      case "my name":
        var tempmatch= partner.name;
        if(tempmatch.match(/\W*(\s=?)/)=== yourName.match(/\W*(\s=?)/)){
             html+= npcSaid("Funny, we have the same name... I be _");
           }
           else{
             html+= npcSaid(partner.language["nice to meet"]);
           }
          partner.knowledge.you.met= true;
          partner.knowledge.you["your name"]= yourName;
          break;
      case "your name":
        html+= npcSaid(partner.language["my name"]);
        break;
      default:
        findInfo(input);
    }
    place();
  }  //end else ongoing=true

  pirateWords();
}

function pirateWords(){

  var sayThis= ""; //reset button list to 0
  var civilIntro= ["hello", "my name", "your name", "nice to meet"];
  var arrayGrab = [];
  var count=0;

  $("#character").show();

  for(k=0; k<civilIntro.length; k++){
    var phrase= Pirate[civilIntro[k]][Math.floor(Math.random()*(Pirate[civilIntro[k]].length))];
    sayThis+= "<button class='options' id='" +civilIntro[k] +"'>" +Object.keys(phrase) +"</button>";
  }
  sayThis+= "<button class='options' id='mbti'>What's your type?</button>";
    $("#optionArea").html(sayThis); //word buttons added
    $(".options").click(function(event){ //click event
      var word= document.getElementById(event.target.id).innerHTML;
      youvesaid.push(event.target.id);
      html+= playerSaid(word);
      place();
      pirateLogic(youvesaid[youvesaid.length-1]);
    });
}

function check(phrase, speaker){
  var string= phrase.replace(/_/, speaker); //fills blank with name
  string= string.charAt(0).toUpperCase()+string.slice(1);
  return string;
}

function findInfo(){
  var keyUnanswered="";
  var value= Object.values(partner.knowledge.you);
  var keys= Object.keys(partner.knowledge.you);
  for(d=0; d<value.length; d++){
    if(value[d]==undefined){
       keyUnanswered= keys[d];
       break;
    }
  }
  //special cases- other way to handle?-----------------------------
  if(keyUnanswered== "your name"){
    keyUnanswered= partner.language["my name"] +", " +partner.language[keyUnanswered];
    partner.knowledge.you.met= true;
    html+= npcSaid(keyUnanswered);
    place();
  }
  else if(keyUnanswered===""){
    html+= npcSaid("time to attend duties, " +partner.language.bye);
    html+= "<button id='toAllCrew'>leave</button>";
    place();
    $("#optionArea").hide();

    $(document).on("click", "#toAllCrew", function(){ loadup("allcrew"); });
  }
   //end special--------------------------
}

function newPartner(){
  var name= generateName();
  var image= generateImage();
  var psyche= generatePersonality(name, image);
  html2= "";
  //[head-0, skin-1, body-2, clothes-3]
  var newPirate ={"language":{ //added in generatePersonality
                },
                "knowledge": {"you":{"met":false, "your name":undefined}},
                "name": name,
                "visual":{"head":image[0],
                          "body":image[2],
                          "skin":image[1],
                          "clothes":image[3]}
  };
  newPirate.language= psyche;

  pirates.push(newPirate);
  var piratenum= pirates.length-1;
  partner= pirates[piratenum];
  $(document).on("click", "#messmate"+piratenum, function(event){
        partner= pirates[piratenum];
        loadup("convo");
      });//end doc button add

  loadup("convo");
}

function playerSaid(content){
  return "<div class='playerSaid'>"+check(content, yourName)+"</div><br>";
}
function npcSaid(content){
  return "<div class='said'>"+check(content, partner.name)+"</div><br>";
}
function place(){
  $(".chat").html(html).scrollTop(chatHeight);
  return;
}
var firstload= true;
function loadup(sitch){
  html="";
  html2="";
  $("#character").html("").hide();
  $("#optionArea").hide();
  //---------------------------
  if(sitch=== "allcrew"){
    if(firstload===true){
      html2+="<div class='characterSet' id='messmate0'><div style='background-color:"+pirates[0].visual.skin +"'><img src='"+pirates[0].visual.head +"' class='piratebits'></div><div style='background-color:"+pirates[0].visual.clothes +"'><img src='"+pirates[0].visual.body +"' class='piratebits'><div class='characterName' title='messmate0'>"+pirates[0].name+"</div></div></div>";
      $(document).on("click", "#messmate0", function(event){
        partner= pirates[0];
        loadup("convo");
      });//end doc button add
       firstload=false;
       html2+= "<div id='addPirate'>+add pirate+</div>";
       $(document).on("click","#addPirate", newPartner);
       }
    else{
      for(i=0; i<pirates.length; i++){
        html2+="<div class='characterSet' id='messmate"+i+"'>";
        html2+= "<div style='background-color:"+pirates[i].visual.skin +"'><img src='"+pirates[i].visual.head +"' class='piratebits'></div><div style='background-color:"+pirates[i].visual.clothes +"'><img src='"+pirates[i].visual.body +"' class='piratebits'><div class='characterName' title='messmate"+i+"'>"+pirates[i].name+"</div></div>";
        html2+="</div>";
    } //end button loop
    html2+= "<div id='addPirate'>+add pirate+</div>";
  }
    $(".contentArea").html(html2);
    ongoing=false;
  }//end load allcrew
  //-----------------------------
  else if(sitch=== "convo"){
    ongoing= false;
    var head= partner.visual.head;
    var skin= partner.visual.skin;
    var body= partner.visual.body;
    var clothes= partner.visual.clothes;
    $("#character").html('<div class="pirate"><div style="background-color:'+skin +'"><img src="'+head +'" class="piratebits"></div><div style="background-color:'+clothes +'"><img src="'+body +'" class="piratebits"></div></div>');

    $("#character").show();
    $("#optionArea").show();
    $(".contentArea").html("<div class='chat'></div>");
    pirateLogic();
  }//end load convo
  else{
    console.log("error: no situation to load");
  }

}//end loadup

$(document).ready(function(){
  $("#character").hide();
  $("#pickname").css({"color": "#3a0047", "text-decoration": "none"});
  $("#rollname").on("click", function(){
    $("#pickname").removeAttr("style");
    generateName();
  });
  $("#setname").click(function(){
    yourName= document.getElementById('pickname').innerHTML;
    $(".contentArea").html("<div class='chat'></div>");
    loadup("convo");
  });

}); //end doc ready
