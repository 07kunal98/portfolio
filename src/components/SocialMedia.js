
export default function SocialMedia(){
    return(
        <div className="flex justify-center bg-gray-900 mt-10 py-10">
            <a href="https://www.linkedin.com/in/kunal-s-086698129/">
                <img src={require("./img/linkedin.png")} width={100} alt="linkedin logo"/>
                <p className="px-5 py-5 text-white">Linkedin</p>
            </a>
        </div>)
}