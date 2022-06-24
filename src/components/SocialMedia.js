
export default function SocialMedia(){
    return(
        <div className="flex justify-center w-full  py-10">
            
            <a href="https://www.linkedin.com/in/kunal-s-086698129/">
                <img src={require("./img/linkedin.png")} width={100} alt="linkedin logo" 
                className="hover:animate-pulse"/>
                <p className="px-5 mr-5 py-5 text-gray-900">Linkedin</p>
            </a>
            <a href="https://github.com/kunal-solankii">
                 <img src={require("./img/github_logo_social_icon.png")} width={100} alt="Github logo" 
                 className="hover:animate-pulse"/>
                <p className="px-5 py-5 text-gray-900">Github</p>
            </a>
            
        </div>)
}