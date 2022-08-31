import React from 'react';

import { Header } from '../components';
import my_Pic from '../data/grad_pic_3.png';

const Portfolio = () => {
  return (
    <div className="m-2 md:m-10mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
        <Header category="Welcome to my" title="Portfolio" />
        
      <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg-
            m-3 p-4 rounded-2xl md:w-780">
          <div className="flex"
          >
            <div className="flex gap-10 flex-wrap justify-center"
            >
              <div className="w-30 p-50">
                <img src={my_Pic} />
              </div>

              <div>
                <h1 className="text-3xl font-bold">Hi!</h1>
                <p className="flex mt-10 text-2xl">
                  My name is Jojie Mark, an aspiring Web/App Developer.
                  I graduate with the bachelor in Science and Information Technology.
                  In this project, I present to you a dashboard web site that I just create.
                </p>

                <div className="mt-10">
                  <p>
                    <span className="text-lg font-semibold">
                      LinkedIn:
                    </span>
                    <span className="text-sm ml-2">
                      Jojie Mark (Jay Em) Nieto / ( https://www.linkedin.com/in/jojie-mark-nieto-ab8116177/ )
                    </span>
                  </p>
                  <p>
                    <span className="text-lg font-semibold">
                      Gmail:
                    </span>
                    <span className="text-sm ml-2">
                      jmnieto73@gmail.com / jayem0554@gmail.com
                    </span>
                  </p>
                </div>

              </div>
            </div>
          </div>
      </div>

      </div>
    </div>

  )
}

export default Portfolio