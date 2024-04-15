import { Button } from './ui/button';

function CustomButton(props:{text:string, cls?:string}) {
  return (
    <Button 
      variant="outline" 
      className={props.cls??"bg-blue-500 hover:bg-blue-700 hover:text-red-500 text-white font-bold py-1 rounded px-5 transition-colors duration-300"}
    >
      <span>{props.text}</span>
    </Button>
  );
}

export default CustomButton;