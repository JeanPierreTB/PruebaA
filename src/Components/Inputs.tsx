import './Inputs.css';

interface InputsProps {
  name: string;
  defaultChecked?: boolean;
  type?:string
}

function Inputs({ name, defaultChecked = false,type="radio" }: InputsProps) {
  return (
    <div className='contenedor'>
      <input type={type} name='group' defaultChecked={defaultChecked} />
      <label>{name}</label>
    </div>
  );
}

export default Inputs;
