import {h, Component} from 'preact';
import Login from '../../components/login'

export default class Auth extends Component{
    render(){
        return (
            <div className="w-full relative min-h-screen flex overflow-hidden">
                <div class="w-48 h-48 bg-ioco-yellow absolute rounded-full bottom-0 left-1/4 sm:left-1/4 md:left-4 mb-8"></div>
                <div class="absolute rounded-full w-72 h-72 circle2 border-ioco-green rounded-full"></div>
                <img class="absolute bottom-0 right-0 m-4" src="../../assets/images/logo.png" alt=""/>
                <div class="w-full bg-gray-100 flex items-center px-6">
                    <Login class="z-10"/>
                </div>
            </div>
        )
    }
}