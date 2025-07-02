import { useNavigate } from "react-router-dom";

const useProvideHooks =()=>{

    const navigate = useNavigate(); 

    return {
        navigate
    }
}

export default useProvideHooks; 