import InputBox from "../components/input.component";

const UserAuthFrom = ({ type }) => {

    return (
        <section className="h-cover flex items-center justify-center">
<form className="w-[80%] max-w-[400px]">
<h1 className="text-4xl font-gelasio capitalize text-ceter mb-24">
    {type =="sign-in" ? "Welcome back": "Join Us Today"}
</h1>
{
    type != "sign-in" ?
    <InputBox
    name="fullname"
    type="text"
    placeholder="User_name"
    icon="fi-rr-user"
    />
    : ""
}

<InputBox
    name="email"
    type="email"
    placeholder="@mail_id"
    icon="fi-rr-envelope"
    />

<InputBox
    name="password"
    type="password"
    placeholder="Password"
    icon="fi-rr-key"
    />


<button className="btn-dark center mt-14" type="submit">
{type.replace("-"," ")}

</button>



</form>
</section>
 )
}


export default UserAuthFrom;
