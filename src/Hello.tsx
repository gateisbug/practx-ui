import React from 'react';

interface Props {
  hello?: boolean;
}

export default function Hello({ hello=true }: Props) {
  return <div>{hello ? 'Hello' : 'Good Bye'}</div>
}