import "./Preguntas.css";
import Inputs from "../../Components/Inputs";
import pregunta3 from "../../Assets/pregunta3.png";
import pregunta4 from "../../Assets/pregunta4.png";

function Preguntas() {
  return (
    <div>
        <h1>Test</h1>
        <h3>First Question</h3>
        <h4>In Object-Oriented Programming (OOP), what is an interface, and how does it define a contract for classes?</h4>
        <Inputs name='a) An interface is a concrete class with predefined methods.' />
        <Inputs name='b) An interface is used for code organization and does not contain any methods.' />
        <Inputs name='c) An interface defines a set of methods that a class implementing it must provide, without specifying the implementation details.' />
        <Inputs name='d) An interface is only used in functional programming and has no relevance in OOP.' /><br/>
        <button className='boton'>Answer</button>

        <h3>Second Question</h3>
        <h4>How does the user interface concept relate to the second SOLID principle, the Open/Closed Principle?</h4>
        <Inputs name="a) The user interface should remain closed for modifications and open for extensions."/>
        <Inputs name="b) The user interface should allow modifications without affecting code extensibility."/>
        <Inputs name="c) The user interface has no relation to the Open/Closed Principle."/>
        <Inputs name="d) The user interface should be static and not allow extensions."/>

        <br/>
        <button className='boton'>Answer</button>


        <h3>Third Question</h3>
        <h4>Why the following code isn't scalable?</h4>
        <img src={pregunta3} alt="p3" style={{borderRadius:'20px'}}></img><br/><br/>
        <textarea style={{width:'50%',height:'80px'}}>
        </textarea><br/><br/>
        <button className='boton'>Answer</button>
        

        <h3>Fourth Question</h3>
        <h4>Explains this code in detail and is complying with the second solid principle</h4>
        <img src={pregunta4} alt="p4" style={{borderRadius:'20px'}}></img><br/><br/>
        <textarea style={{width:'50%',height:'80px'}}>
        </textarea><br/><br/>
        <button className='boton'>Answer</button>

        <h3>Fifth Question</h3>
        <h4>In the context of the second SOLID principle, the Open/Closed Principle (OCP), select all the correct statements:</h4>
        <Inputs name='a) The OCP promotes code extensibility without the need to modify existing code.' type='checkbox'/>
        <Inputs name='b) According to the OCP, a class should remain closed for modifications but open for extensions.' type='checkbox'/>      
        <Inputs name='c) The OCP focuses on dividing a class into several smaller and specific interfaces.' type='checkbox'/>      
        <Inputs name='d) Applying the OCP can help reduce the risk of introducing errors when adding new functionalities.' type='checkbox'/>
        <Inputs name='e) The OCP is part of the five SOLID principles proposed by Robert C. Martin for designing more maintainable and scalable software.' type='checkbox'/><br/><br/>
        <button className='boton'>Answer</button>


        <h3>Sixth Question</h3>
        <h4>In conclusion, explain the second principle of solid with your words.</h4>
        <textarea style={{width:'50%',height:'80px'}}>
        </textarea><br/><br/>
        <button className='boton'>Answer</button><br/><br/>

        <button className="botonf" onClick={()=>alert("The results will be published soon")}>Send</button>


    </div>
  )
}

export default Preguntas