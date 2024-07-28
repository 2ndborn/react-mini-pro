import React from 'react'

function MethodsAsPropsChild(props) {
  return (
    <div>
          {
              props.isLoggedIn ? (
                  <div>
                      <p>Welcome to the site! Please complete the steps below:
                          <ol>
                              <li>Confirm your email</li>
                              <li>Complete your profile</li>
                              <li>Subscribe to the newsletter</li>
                          </ol>
                      </p>
                      <button onClick={props.handleSignOut}>Sign Out</button>
                  </div>
              ) : (
                  <div>
                      <p>Please sign in</p>
                      <button onClick={props.handleSignIn}>Sign In</button>
                  </div>
              )
          }
    </div>
  )
}

export default MethodsAsPropsChild