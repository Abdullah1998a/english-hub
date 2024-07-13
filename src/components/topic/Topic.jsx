import { Slider } from "../slider";
import "./topic.css";

export function Topic({ topic }) {
  const { title, date, opinions } = topic;
  return (
    <section>
      <div className="topic">
        <div className="tag">Discussion topic</div>
        <h1 className="title">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 48 48"
          >
            <defs>
              <mask id="ipSTopic0">
                <g fill="none" strokeLinejoin="round" strokeWidth="4">
                  <path
                    fill="#fff"
                    stroke="#fff"
                    d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24a19.94 19.94 0 0 0 3.368 11.112c.244.363-.213 2.66-1.368 6.888c4.229-1.155 6.525-1.612 6.888-1.368A19.94 19.94 0 0 0 24 44Z"
                  />
                  <path
                    stroke="#000"
                    strokeLinecap="round"
                    d="M16.605 19.82h16.779m-11.537-4.082l-2.914 16.524m9.914-16.524l-2.914 16.524M14.605 28h16.779"
                  />
                </g>
              </mask>
            </defs>
            <path fill="#36454F" d="M0 0h48v48H0z" mask="url(#ipSTopic0)" />
          </svg>
          {title}
        </h1>
        <div className="join-us">
          <p>
            You want to engage in such a great discussion! Kindly, join our
            group now and share your thoughts with more than <span>10</span>{" "}
            active members.
          </p>
          <a
            href="https://chat.whatsapp.com/KkmMsDnNSNgLtg8FjtVo8r"
            target="_blank"
          >
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <circle cx="9" cy="9" r="4" fill="currentColor" />
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M14.864 18.813c.021.105.11.187.218.187h1.785c.602 0 1.054-.529.853-1.096C17.3 16.72 16.295 15 14 15c-.126 0-.247.005-.365.015c-.376.032-.472.494-.22.774c.905 1.005 1.285 2.203 1.449 3.024m-1.336-.98c.243.583-.236 1.167-.868 1.167h-1.527c-.602 0-1.054-.529-.853-1.096c.19-.536.5-1.181.995-1.728a.75.75 0 0 1 1.058-.055c.572.506.948 1.122 1.195 1.712"
                    clipRule="evenodd"
                  />
                  <path
                    fill="currentColor"
                    d="M9 15c3.572 0 4.592 2.551 4.883 4.009c.109.541-.33.991-.883.991H5c-.552 0-.992-.45-.883-.991C4.408 17.55 5.428 15 9 15"
                  />
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M12.482 12.588A4.985 4.985 0 0 0 14 9c0-.7-.144-1.368-.404-1.973a3 3 0 1 1-1.114 5.561m-.77-.648A3.99 3.99 0 0 0 13 9c0-.597-.13-1.163-.365-1.672a3 3 0 0 0-.923 4.612"
                    clipRule="evenodd"
                  />
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M19 3v4m2-2h-4"
                  />
                </g>
              </svg>
              <span>Join Us</span>
            </button>
          </a>
        </div>
      </div>
      <Slider opinions={opinions} date={date} />
    </section>
  );
}
