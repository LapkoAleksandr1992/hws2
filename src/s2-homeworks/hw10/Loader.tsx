import s from './Loader.module.css'

export const Loader = () => {
    return(
            <svg className={s.main}
                viewBox="0 0 80 80"
                xmlns="<http://www.w3.org/2000/svg>"
            >
                <circle
                    cx="12" cy="12" r="8"
                    stroke-width="4" stroke="tomato"
                    fill="none"
                />

            </svg>

    )
}




