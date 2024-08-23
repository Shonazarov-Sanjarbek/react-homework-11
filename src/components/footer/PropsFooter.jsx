import React from 'react'

function PropsFooter({company, account, corporate, popular}) {
  return (
    <>
              <div className="space-y-4">
          <p className="text-black text-lg font-semibold">Company</p>
          <ul className="space-y-2">
            {
              company?.map((li, inx) => (
            <li key={inx}>
              <a href="#" className="hover:text-gray-400">
                  <span>
                    {li}
                  </span>
              </a>
            </li>
              ))
            }
          </ul>
        </div>

        {/* Account Links */}
        <div className="space-y-4">
          <p className="text-black text-lg font-semibold">Account</p>
          <ul className="space-y-2">
            {
            account?.map((li, inx) => (
            <li key={inx}>
              <a href="#" className="hover:text-gray-400">
                {li}
              </a>
            </li>
            ))
            }
          </ul>
        </div>

        {/* Corporate and Popular Links */}
        <div className="space-y-4">
          <p className="text-black text-lg font-semibold">Corporate</p>
          <ul className="space-y-2">
            {
              corporate?.map((li, inx) => (
            <li key={inx}>
              <a href="#" className="hover:text-gray-400">
                {li}
              </a>
            </li>
              ))
            } 
          </ul>
        </div>
        <div className="space-y-4">
          <p className="text-black text-lg font-semibold">Popular</p>
          <ul className="space-y-2">
            {
              popular?.map((li, inx) => (
            <li key={inx}>
              <a href="#" className="hover:text-gray-400">
                {li}
              </a>
            </li>
            ))
            }
          </ul>
        </div>
    </>
  )
}

export default PropsFooter
