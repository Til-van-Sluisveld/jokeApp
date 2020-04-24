const express = require(`express`);
const app = express();
const port = 3000;

const jokes = [
    {
        setup: "What is the best thing about Switzerland?",
        image1: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Switzerland.svg/1200px-Flag_of_Switzerland.svg.png",
        image2: "https://www.premiumswitzerland.com/img/image_db/views_of_swiss_tradition_4-942.jpg",
        punchline: "I don't know, but their flag is a big plus!",
    },
    {
        setup:"Did you hear the one about the for loop that was afraid of negative numbers?",
        image1: "https://blog.capterra.com/wp-content/uploads/2013/06/shutterstock_83564506.jpg",
        image2: "http://www.quirkyscience.com/wp-content/uploads/2014/03/Negative-1-by-Author.jpg",
        punchline: "It stops at nothing to avoid them",
    },
    {
        setup:"Why wasn't the vampire writing his code?",
        image1:"https://2.bp.blogspot.com/-JVIK9ksL1Ng/We3o_cuh5eI/AAAAAAAHivY/uyXgRq-vwdAoQT2eN_iCgCVQArp2QkyGQCEwYBhgL/s1600/Haunted_Vampire_in_Coffin_Clipart.png",
        image2:"http://media.istockphoto.com/photos/back-view-of-modern-programmer-sitting-and-writing-code-picture-id508417878?k=6&m=508417878&s=612x612&w=0&h=U_7Zyd5CMopBFqwvm2oG2mAOMOcl-4SJEG-uStQLEUU=",
        punchline:"He was taking a coffin brake",
    },
    {
        setup:"What do you call a singing laptop?",
        image1:"http://huytonwithrobyce.co.uk/wp-content/uploads/2015/09/cartoon-laptop-computer-1408040.jpg",
        image2:"http://4.bp.blogspot.com/_I_rRqZjTqu0/TJCpeTjk3_I/AAAAAAAAApM/_q2y83SQshk/s1600/music_notes.jpg",
        punchline:"A Dell!",
    },
    {
        setup:"How do trees get online?",
        image1:"https://i.pinimg.com/736x/9f/f6/71/9ff671b4c85270fe2feea5aebfb45693.jpg",
        image2:"http://sr.photos1.fotosearch.com/bthumb/CSP/CSP469/k4697342.jpg",
        punchline:"They just log on!",
    }];

function onListen (){
    console.log(`Listening on ${port}`);
}
function render (message,id){
    const document = `
<html>
    <head>
        <title>${message}</title>
        <style>
            body {
                font-family: 'Myriad-Pro', 'myriad', helvetica, arial, sans-serif;
                text-align: center;
            }
            h1 {
                padding: 20px;
            }
            p {
                padding: 10px;
            }
            img {
                width: 250px;
                height: auto ;
            }
            marquee {
                width: 500px;
            }
            span::before {
                content: "1";
                padding-right: 5px;
            }
            span::after {
                content: "10";
                padding-left: 5px;
            }

        </style>
    </head>
    <body>
        <h1>Welcome ${message}!</h1>
        <marquee> Hey ${message}, wanna hear a joke? </marquee>
        <p> ${jokes[id].setup} </p>
        <img src='${jokes[id].image1}' />
        <img src='${jokes[id].image2}' />
        <p> ${jokes[id].punchline} </p>
        <form method="post">
            <h2> Rate this Joke </h2>
            <span><input type="range" name="range" min="1" max="10" step="1" value=""></span>
        </form>
    </body>
</html>
`
    return document
}

app.get(
    '/user/:name/:age',
    (request, response) => {
         console.log(request.path);
        let id;
        const age = parseInt(request.params.age);
        if(age <= 20)
        {
            console.log(`younger than 21`)
            id = 0;
        }
        if(age > 20 && age <= 25)
        {
            console.log(`Older than 20, younger than 26`)
            id = 1;
        }
        if(age > 25 && age <= 30)
        {
            console.log(`Older than 25, younger than 31`)
            id = 2;
        }
        if(age > 30 && age <= 35)
        {
            console.log(`Older than 30, younger than 36`)
            id = 3;
        }
        if(age > 35)
        {
            console.log(`Older than 35`)
            id = 4;
        }
        
        const page = render(request.params.name,id);
        response.send(page);
         
    }
);

app.get(
    '/student/:name',
    (request, response) => {
        let id;
        const name = request.params.name;
        if (name === "jui")
        {id = 0;}
        if (name === "juri")
        {id = 1;}
        if (name === "martijn")
        {id = 2;}
        if (name === "mitra")
        {id = 3;}
        if (name === "nazneen")
        {id = 4;}
        
        const page = render(request.params.name,id)
        response.send(page);
        
    }
)

app.listen(
    port,       //server listens on the port assigned to this variable
    onListen    //function displaying a message on which port the server is listening
    );