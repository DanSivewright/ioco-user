import { h, Component } from 'preact';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

export class index extends Component {
    render() {
        return (
            <div class="index-test w-full bg-white mx-auto rounded-lg shadow-lg py-8 px-6">
                <p class="font-bold text-lg text-ioco-blue text-center">Welcome to iOCO!</p>

                <div class="index-test flex flex-col">

                    <p class="mt-6 text-md font-light text-ioco-blue leading-none">Please enter email to sign in or activate your account:</p>
                    <form class="my-8 w-full max-w-sm">
                        <TextField fullWidth id="standard-basic" label="Email" />
                    </form>

                    <a class="w-full py-3 rounded-lg text-center grad-blue text-ioco-blue font-bold text-md">LOG IN</a>

                </div>
            </div>
        )
    }
}

export default index
