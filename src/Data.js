// Copyright 2024 Saideep
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     https://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import data from './data.json';
import {useState} from 'react';

function Data() {
    const [nData,setnData] = useState(data);

    const handleClear = () => {
        setnData([]);
    }

    return (
        <div>
            <ul>
                {
                    nData.map((item) => {
                        return (
                            <li key = {item.id}>
                                {item.name}
                            </li>
                        )
                    })
                }
            </ul>
            <button onClick = {handleClear}>clear</button>
        </div>
    )
}

export default Data;