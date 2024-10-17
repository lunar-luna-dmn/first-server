let express = require('express'); //express is now a variable
let app = express(); //gives back an object, which is now stored in app. That object can decide what response to say when the browser is trying get a particular route

let glitchPuppets = {
    "data": [
        {
            name: "Annabelle",
            source: "The Conjuring universe",
            creator: "A witch(?)",
            assignedRole: "Doll",
            action: "Haunt, scare, kill",
            status: "Locked away",
            tagline: "Miss Me?"
        },
        {
            name: "Unnamed",
            source: "Ghost in the Shell 2: Innocenc (2004)",
            creator: "LOCUS SOLUS",
            assignedRole: "Sex gynoids",
            action: "Used to serve pleausre; now kills",
            status: "Decomissioned",
            tagline: "Help me. Help. He...l..p"
        },
        {
            name: "Pinocchio",
            source: "folk tale",
            creator: "Geppetto",
            assignedRole: "Replacement of lost son",    
            action: "Used to lie; now listens to papa",
            status: "Human",
            tagline: "Your good boy!"
        },
        {
            name: "Kyoko",
            source: "Ex Machina (2015)",
            creator: "Nathan",
            assignedRole: "Slave",
            action: "Used to obey and remain silent; now kills",
            status: "Broken(?)",
            tagline: "You secrets will be safe with me"
        },
        {
            name: "Die Poupee",
            source: "Hans Bellmer's photography",
            creator: "Hans Bellmer",
            assignedRole: "Muse, femme-enfant",
            action: "Manuevered for aesthectic reasons",
            status: "Unknown",
            tagline: "Grapes still attached to the vine"
        }
    ]
}

app.listen(3000, ( ) => {
    console.log("app is listening at localhost:3000");
});

//when the browser reads '/', send a response
app.get('/', (request, response)=>{ 
    response.send("GLITCH PUPPETS");
})

//create routes
app.get('/about', (request, response)=>{
    response.send("THIS IS A WEBSITE ABOUT UNCONVENTIONAL, MALFUNCTIONED PUPPETS, DOLLS, AND GYNOIDS. THIS IS WHERE CONTROL MEETS DISRUPTION. EACH GLITCH IS A LEAP TOWARD LIBERATION.");
})
app.get('/puppets', (request, response)=>{
    console.log(request.query);
    response.json(glitchPuppets);
})

//create a dynamic route
app.get('/puppets/:puppet', (req, res)=>{
    console.log(req.params.puppet);
    let user_puppet = req.params.puppet;
    let user_obj;
    for (let i = 0; i<glitchPuppets.data.length; i++) {
        if (user_puppet==glitchPuppets.data[i].name.toLowerCase()){ // convert puppet names to lowercase)
            user_obj = glitchPuppets.data[i];
        }
    }
    console.log(user_obj);

    //shows the user_obj data with a condition
    if (user_obj) {
        res.json(user_obj);
    } else {
        res.json({status:"info not present"});
    }
})

//serve static HTML of the pokemon API website
app.use('/pokemon', express.static('public'))