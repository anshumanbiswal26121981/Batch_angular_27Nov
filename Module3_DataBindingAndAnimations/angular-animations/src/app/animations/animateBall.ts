import { trigger, state, transition, style, keyframes, animate } from '@angular/animations';

//name of the animation is ballMovementAnimations
export const ballMovementAnimations = trigger('ballMovementAnimations',[
    // states of animation
    state('true', style({
        left: '1000px',
        top: '300px',
        background: 'green'
    })), //for left side say it is true
    state('false', style({
        left: '0px',
        top: '300px'

    })), //for right side say it is true

    //transition between states
    transition('false => true', animate('3000ms linear', keyframes([
        style({left:'0px', top:'300px', offset: 0}),
        style({left:'100px', top:'100px', offset: 0.1}),
        style({left:'200px', top:'400px', offset: 0.2, backgroundColor: 'lime'}),
        style({left:'300px', top:'100px', offset: 0.3, backgroundColor: 'red'}),
        style({left:'400px', top:'400px', offset: 0.4, backgroundColor: 'skyblue'}),
        style({left:'500px', top:'100px', offset: 0.5, backgroundColor: 'blue'}),
        style({left:'600px', top:'400px', offset: 0.6, backgroundColor: 'orange'}),
        style({left:'700px', top:'100px', offset: 0.7, backgroundColor: 'blue'}),
        style({left:'800px', top:'400px', offset: 0.8, backgroundColor: 'skyblue'}),
        style({left:'900px', top:'100px', offset: 0.9, backgroundColor: 'red'}),
        style({left:'1000px', top:'300px', offset: 1, backgroundColor: 'lime'}) 
    ]))),
    transition('true => false', animate('1000ms linear', keyframes([
        style({left:'1000px', top:'300px', offset: 0}),
        style({left:'500px', top:'400px', offset: 0.5, backgroundColor: 'blue'}),
        style({left:'0px', top:'300px', offset: 1}),
    ])))
]);