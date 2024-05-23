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

    const handleClear = (itemId) => {
        setnData(nData.filter((elem) => elem.id !==itemId));
    }
    const handleUpdate = (itemId) => {
        setnData(nData.map((elem) => {
               if(elem.id === itemId) {
                return {name: 'updatedName'};
               }
               else {
                return elem;
               }
        }))
    }

    return (
        <div>
            <ul>
                {
                    nData.map((item) => {
                        return (
                            <li key = {item.id}>
                                {item.name}
                                <br/>
                                <button onClick = {() => handleClear(item.id)}>clear</button>
                                <button onClick = {() => handleUpdate(item.id)}>update</button>
                            </li>
                        )

                    })
                }
            </ul>
        </div>
    )
}

export default Data;