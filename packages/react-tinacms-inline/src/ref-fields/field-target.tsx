/**

Copyright 2019 Forestry.io Inc

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/

import * as React from 'react'

export function FieldTarget({ onClick }: { onClick: () => void }) {
  const [opacity, setOpacity] = React.useState('0.0')
  return (
    <div
      onClick={onClick}
      onMouseOver={() => setOpacity('1.0')}
      onMouseLeave={() => setOpacity('0.0')}
      style={{
        width: '100%',
        height: '100%',
        border: '5px solid red',
        opacity,
      }}
    ></div>
  )
}
