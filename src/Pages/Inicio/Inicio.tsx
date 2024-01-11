import React from 'react'
import "./Inicio.css"
import Inputs from '../../Components/Inputs'
import { useNavigate } from 'react-router-dom'


function Inicio() {
  const navigate=useNavigate();

  return (
    <div>
        <h1>Test of the second solid principle</h1>
        <p>You must demonstrate having learned the second principle of solid, the grading and questions rubric is shown below:</p>
        <hr/>
        <h2>Notes rubric</h2>
        <p>Score between 0-12 poor knowledge</p>
        <p>Score between 13-15 good knowledge</p>
        <p>Score between 16-20 excellent knowledge</p>
        <hr/>
        <h2>Question rubric</h2>
        <p>1)One options questions:Select the correct answer[2 points]-Select the wrong answer[0 points]</p>
        <p>2)Questions to write:Answer the question appropriately[4 points]-Answer the questions inappropriately[0 points]</p>
        <p>3)Multiple choice questions:Select all correct answer[4 points]-Select half of the correct answers[2 points]-Select all wrong answer[0 points]</p>
        <hr/>
        <h2>Example</h2>
        <h3>Marking Questions</h3>
        <h4>What is the term for the concept where a class can inherit properties and methods from another class in TypeScript?</h4>
        
        <Inputs name='a) Encapsulation' />
        <Inputs name='b) Polymorphism' />
        <Inputs name='c) Inheritance' defaultChecked={true} />
        <Inputs name='d) Abstraction' /><br/>
        <button className='boton'>Answer</button>
        <h5>Here you select the option that you think is correct and click the answer button</h5>
        <hr/>

        <h3>Questions to write</h3>
        <h4>¿Which is the different between encapsularion and polymorphism?</h4>
        <textarea style={{width:'50%',height:'80px'}}>
        </textarea><br/><br/>
        <button className='boton'>Answer</button>
        <h5>Here you write the answer that you think is correct and click the answer button</h5>
        <hr/>
        <h3>Multiple choice questions</h3>
        <h4>In Object-Oriented Programming, what are the main principles of encapsulation?</h4>
        <Inputs name='a)Inheritance' type='checkbox'/>
        <Inputs name='b)Polymorphism' type='checkbox'/>      
        <Inputs name='c)Restriction of access to class members' type='checkbox'/>      
        <Inputs name='d)Code reusability' type='checkbox'/> <br/>     
        <button className='boton'>Answer</button>
        <h5>Here you select the options that you think is correct and click the answer button</h5>
        
        <button className='botonf' onClick={()=>navigate("/questions")}>Start Test</button>
        

    </div>
  )
}

export default Inicio