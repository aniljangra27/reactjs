import RegisterForm from "./RegisterForm";
import StateComp from "./StateComp";
import ButtonTest from "./ButtonTest";

function OtherComp() {
    return(
        <div className="">
            <ButtonTest/>
            <RegisterForm/>
            <StateComp/>
        </div>
    )
}
export default OtherComp;