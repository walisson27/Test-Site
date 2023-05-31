import { ArrowRight } from "react-feather";
import "../style/cssBotão.css"

const PremiumButton = () => {
		return (
		<> 
		<button className='flex rounded-lg justify-between p-2.5 colorButton w-52'>
				<p className='text-textSec text-sm font-medium'>
					Quero ser Premium
				</p>
				<div className='buttonLine pl-2'>
					<ArrowRight color='#fff' size="22" />
				</div>
		</button>
		</>
		)
	}
export default PremiumButton;
