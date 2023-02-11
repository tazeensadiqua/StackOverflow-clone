import React from 'react'
import { useLocation} from 'react-router-dom'
import './HomeMainbar.css'
import QuestionList from './QuestionList'
import { useNavigate } from 'react-router-dom'
import { useSelector} from 'react-redux'


const HomeMainbar = () => {

    const location = useLocation()
    const user = 123;
     const navigate = useNavigate()

     const questionsList = useSelector(state => state.questionsReducer)


      //var questionsList = [{ 

        // _id: 1,
         //upVotes: 3,
         //downVotes: 2,
      //   noOfAnswers: 2,
   //      questionTitle: "What is a function?",
   //      questionBody: "It meant to be",
  //       questionTags: ["javascript", "R", "python"],
    //     userPosted: "mano",
      ///   askedOn: "jan 1",
         //userId: 1,
         //answer:[{
           // answerbody: "Answer",
            //userAnswered: "Kumar",
            //answerredon:"jan2",
            //userId:2,

         //}]
   
         
    
     //},{ 
       //  _id: 2,
         //upVotes: 3,
         //downVotes: 2,
         //noOfAnswers: 0,
         //questionTitle: "What is a function?",
         //questionBody: "It meant to be",
         //questionTags: ["javascript", "R", "python"],
         //userPosted: "mano",
         //askedOn: "jan 1",
         //userId: 1,
         //answer:[{
           // answerbody: "Answer",
           // userAnswered: "Kumar",
            //answerredon:"jan2",
            //userId:2,

        // }]
   
    //},{ 
      //   _id: 3,
        // upVotes: 3,
         //downVotes: 2,
         //noOfAnswers: 0,
         //questionTitle: "What is a function?",
         //questionBody: "It meant to be",
         //questionTags: ["javascript", "R", "python"],
         //userPosted: "mano",
         //askedOn: "jan 1",
         //userId: 1,
         //answer:[{
          //  answerbody: "Answer",
           // userAnswered: "Kumar",
            //answerredon:"jan2",
            //userId:2,

         //}]
    //}]

    

     
     
    const checkAuth = () =>{
        if(user === null ){

            alert("login or signup to ask a question")
            navigate('/Auth')
        
        }
        else{
            navigate('/AskQuestion')
        }
    }

  return (
    <div className='main-bar'>
            <div className='main-bar-header'>
                {
                    location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
                }
                <button  onClick={ checkAuth } className='ask-btn'>Ask Question</button>
            </div>
            <div>
                {
                    questionsList.data === null ?
                    <h1>Loading...</h1> :
                    <>
                        <p>{ questionsList.data.length } questions</p>
                        <QuestionList questionsList={questionsList.data} />
                    </>
                }
            </div>
        </div>
    )
}

export default HomeMainbar
