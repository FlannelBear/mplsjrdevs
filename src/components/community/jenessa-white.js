import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram';
import faLink from '@fortawesome/fontawesome-free-solid/faLink';
import faReact from '@fortawesome/fontawesome-free-brands/faReact';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import faWordpress from '@fortawesome/fontawesome-free-brands/faWordpress';

export default {
  id: 'jenessa-white',
  name: 'Jenessa White',
  bio: () => (
    <div>
      Hey I&#39;m Jenessa!<br />
      <br />
      I am a Front-End Developer, an athlete, and a podcast lover from St. Paul.<br />
      <br />
      I like to contribute to open-source projects, go to confrences, and am a
      big supporter of pairing!
      <br />
      <br />
      My skillset includes:
      <ul className="skills-list">
        <li className="skill">
          React <FontAwesomeIcon icon={faReact} />
        </li>
        <li className="skill">
          Wordpress <FontAwesomeIcon icon={faWordpress} />
        </li>
        <li className="skill">Sass</li>
        <li className="skill">
          Rails (in progress{' '}
          <span role="img" aria-label="Smirking">
            😏
          </span>{' '}
          )
        </li>
      </ul>
      <div className="social-links">
        <a
          href="https://github.com/jenessawhite"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          href="http://twitter.com/jnessview"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a
          href="https://instagram.com/thenessview"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a
          href="https://jenessawhite.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FontAwesomeIcon icon={faLink} size="2x" />
        </a>
      </div>
    </div>
  )
};
