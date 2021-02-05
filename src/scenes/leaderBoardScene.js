import APIHandler from '../utils/apiHandler.js';

export default class Leaderboard extends Phaser.Scene {
    constructor() {
        super('leaderboard');
        this.space = 0;
    }

    create() {
        const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/nJMvjp5o0e7RhCRrNWFM/scores'
        const score = JSON.parse(localStorage.getItem('score:'));
        const username = JSON.parse(localStorage.getItem('username:'));
        console.log(typeof(score));
        let obj =  {
          'user': username,
          'score': score,
        }
        
        
      
  
      APIHandler.getData(url)
        .then(data => {
          console.log(data);
          data.result.sort((a,b) => b.score - a.score).slice(0,10).forEach((userObj, index) => {
            this.add.text(
              280,
              170 + this.space,
              `${index + 1}. ${userObj.user} | ${userObj.score}`,
              {
                font: '19px monospace',
                fill: '#0000ff',
              },
            );
            this.space += 30;
          });
        });

        this.submit = this.add.dom(150,100,'button','padding:20px;background-color:gray;','Go Back');
       
        this.btn = document.querySelector('button');
        this.btn.addEventListener('click',e => {
           
            this.scene.start('titleScene')
        });
    }

    


    }

