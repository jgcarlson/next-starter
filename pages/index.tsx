import Link from 'next/link';
import React from 'react';

export default () => (
  <div>
    <ul>
      <li><Link href="/a" as="/a"><a>a</a></Link></li>
      <li><Link href="/b" as="/b"><a>b</a></Link></li>
    </ul>
  </div>
);
