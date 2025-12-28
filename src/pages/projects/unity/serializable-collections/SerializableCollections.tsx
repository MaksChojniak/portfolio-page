import PageSectionName from '../../../../components/content/page-section/Section'
import PageTitle from '../../../../components/content/title/Title'
import PageLinkToContent from '../../../../components/content/link-to-content-page/Link'
import PageContent from '../../../../components/content/content/Content'

import Code, { ProgrammingLang } from '../../../../components/content/code/Code'

import { IoMdDownload } from "react-icons/io";

import './../../style/style.css'

const SerializableCollections = () => {

    // const diagram_path = "/assets/projects/dotnet/travel-agency/diagram.png"

    return (
    <>
        <PageSectionName text={["Projects", "Unity"]}/>
        <PageTitle text={"Serializable Collections"} />
        <PageLinkToContent link={"https://github.com/MaksChojniak/CDPR-RPG/tree/feature/collections"}>https://github.com/unity/collections</PageLinkToContent>
        <PageContent>
            <div className='project-container'>
                <div className='project-section'>
                    <div className='project-section-title'><div className='project-title-icon'><IoMdDownload /></div>Installation</div>
                    <div>
                        Not released yet
                    </div>
                </div>                
              
                <div className='project-section'>
                    <div className='project-section-title'>{'Dictionary<Key, Value>'}</div>
                    <div>
                        This custom <b>Dictonary</b> can be created using one of the <b>constructors</b> like in the system collection <b>Dictionary</b>.<br/>
                        <ul>
                            <li className='project-list-element'>
                                Base constructor
                                <Code language={ProgrammingLang.csharp}>{'UnityDictionary<string, string> dict = new UnityDictionary<string, string>();'}</Code>
                            </li>
                            <li className='project-list-element'>
                                Copy constructor (also from base system dictionary)
                                <Code language={ProgrammingLang.csharp}>{'UnityDictionary<string, string> dict = new UnityDictionary<string, string>(existingDict);'}</Code>
                            </li>
                        </ul>
                        This data collection also provides all the same functionality as the base one, such as: <b>Add</b>, <b>Remove</b>, <b>ContainsKey</b> and more.<br/>
                        Example code
                        <Code language={ProgrammingLang.csharp}>
                            {'UnityDictionary<string, string> dict = new();' + '\n' +
                            'dict.Add("key1", "hello");' + '\n' +
                            'dict.Add("key2", "world");' + '\n' +
                            'foreach(var el in dict)' + '\n' +
                            '   Console.WriteLine(el);  // expected output: [key1, hello] [key2, world]'};
                        </Code>
                    </div>
                </div>

                <div className='project-section'>
                    <div className='project-section-title'>{'HashSet<Value>'}</div>
                    <div>
                        This custom <b>HashSet</b> can be created using one of the <b>constructors</b> like in the system collection <b>HashSet</b>.<br/>
                        <ul>
                            <li className='project-list-element'>
                                Base constructor
                                <Code language={ProgrammingLang.csharp}>{'UnityHashSet<string> hashSet = new UnityHashSet<string>();'}</Code>
                            </li>
                            <li className='project-list-element'>
                                Copy constructor (also from base system hash set)
                                <Code language={ProgrammingLang.csharp}>{'UnityHashSet<string> hashSet = new UnityHashSet<string>(existingHashSet);'}</Code>
                            </li>
                        </ul>
                        This data collection also provides all the same functionality as the base one, such as: <b>Add</b>, <b>Remove</b>, <b>Clear</b> and more.<br/>
                        Example code
                        <Code language={ProgrammingLang.csharp}>
                            {'UnityHashSet<string> hashSet = new();' + '\n' +
                            'hashSet.Add("hello");' + '\n' +
                            'hashSet.Add("world");' + '\n' +
                            'hashSet.Add("world");' + '\n' +
                            'foreach(var el in hashSet)' + '\n' +
                            '   Console.WriteLine(el);  // expected output: [hello] [world]'};
                        </Code>
                    </div>
                </div>

                <div className='project-section'>
                    <div className='project-section-title'>{'Queue<Value>'}</div>
                    <div>
                        This custom <b>Queue</b> can be created using one of the <b>constructors</b> like in the system collection <b>Queue</b>.<br/>
                        <ul>
                            <li className='project-list-element'>
                                Base constructor
                                <Code language={ProgrammingLang.csharp}>{'UnityQueue<string> queue = new UnityQueue<string>();'}</Code>
                            </li>
                            <li className='project-list-element'>
                                Copy constructor (also from base system queue)
                                <Code language={ProgrammingLang.csharp}>{'UnityQueue<string> queue = new UnityQueue<string>(existingQueue);'}</Code>
                            </li>
                        </ul>
                        This data collection also provides all the same functionality as the base one, such as: <b>Enqueue</b>, <b>Dequeue</b>, <b>Peek</b>, <b>Clear</b> and more.<br/>
                        Example code
                        <Code language={ProgrammingLang.csharp}>
                            {'UnityQueue<string> queue = new();' + '\n' +
                            'queue.Enqueue("hello");' + '\n' +
                            'queue.Enqueue("world");' + '\n' +
                            'while(queue.Count > 0)' + '\n' +
                            '   Console.WriteLine(queue.Dequeue());  // expected output: [hello] [world]'};
                        </Code>
                    </div>
                </div>
                <div className='project-section'>
                    <div className='project-section-title'>{'Stack<Value>'}</div>
                    <div>
                        This custom <b>Stack</b> can be created using one of the <b>constructors</b> like in the system collection <b>Stack</b>.<br/>
                        <ul>
                            <li className='project-list-element'>
                                Base constructor
                                <Code language={ProgrammingLang.csharp}>{'UnityStack<string> stack = new UnityStack<string>();'}</Code>
                            </li>
                            <li className='project-list-element'>
                                Copy constructor (also from base system stack)
                                <Code language={ProgrammingLang.csharp}>{'UnityStack<string> stack = new UnityStack<string>(existingStack);'}</Code>
                            </li>
                        </ul>
                        This data collection also provides all the same functionality as the base one, such as: <b>Push</b>, <b>Pop</b>, <b>Peek</b>, <b>Clear</b> and more.<br/>
                        Example code
                        <Code language={ProgrammingLang.csharp}>
                            {'UnityStack<string> stack = new();' + '\n' +
                            'stack.Push("hello");' + '\n' +
                            'stack.Push("world");' + '\n' +
                            'while(stack.Count > 0)' + '\n' +
                            '   Console.WriteLine(stack.Pop());  // expected output: [world] [hello]'};
                        </Code>
                    </div>
                </div>
            
            </div>
        </PageContent>
    </>
    );
}

export default SerializableCollections