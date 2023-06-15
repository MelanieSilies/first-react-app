import './Footer.scss';

export const Footer = () => {
    return (
        <div className='Footer'>
            <p>
            &copy; { new Date().getFullYear() } by Melanie Silies 
            </p>
        </div>
    )
}