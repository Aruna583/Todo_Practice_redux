import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, removeTodo } from '../../actions';

const Todo = () => {

    const [inputData, setInputData] = useState('');

    const list = useSelector((state) => state.todoReducers.list);

    const dispatch = useDispatch()

    return (
        <>
            <div className='text-center'>
                <div >
                    <figure>
                        <figcaption className='text-lg font-bold mt-4 mb-3'>Add Your List Here </figcaption>


                    </figure>
                    <div  >
                        <input type="text"
                            placeholder='Add Items'
                            value={inputData}
                            className='border-black border-solid border-2 h-14'
                            onChange={(event) => setInputData(event.target.value)} />
                        <button
                            className='ml-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                            onClick={() => dispatch(addTodo(inputData), setInputData(''))}>
                            +
                        </button>
                    </div>

                    <div className='flex flex-col justify-between items-center'>
                        {list.map((elem) => {
                            return (
                                <div className='m-3 rounded w-60 border-solid border-black border-2 flex flex-row justify-between' key={elem.id}>
                                    <h3 className='m-3'>{elem.data}</h3>
                                    <div className='mr-2'>
                                        <button title="DeleteItem" className='ml-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded'
                                            onClick={() => dispatch(deleteTodo(elem.id))}>
                                            -
                                        </button>
                                    </div>
                                </div>

                            )
                        })}

                    </div>
                    <button 
                    onClick={()=>dispatch(removeTodo())}
                    
                    data-sm-link-text="remove All"
                     className='ml-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded'>
                        CheckList
                    </button>

                    <div>

                    </div>


                </div>


            </div>
        </>
    )
}

export default Todo