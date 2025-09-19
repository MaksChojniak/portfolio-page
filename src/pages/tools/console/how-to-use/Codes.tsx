export const howToUse_Log_Code = 
`using UnityEngine;
using MChojniakStudio.Console;

public class TestMono : MonoBehaviour
{
    void Start()
    {
        Console.Log("Hello World");   // output: 
    }
}`;

export const howToUse_Warning_Code = 
`using UnityEngine;
using MChojniakStudio.Console;

public class TestMono : MonoBehaviour
{
    void Start()
    {
        Console.Warning("Hello World");   // output: 
    }
}`;

export const howToUse_Error_Code = 
`using UnityEngine;
using MChojniakStudio.Console;

public class TestMono : MonoBehaviour
{
    void Start()
    {
        Console.Error("Hello World");   // output: 
    }
}`;

export const howToUse_Command_Code = 
`using UnityEngine;
using MChojniakStudio.Console;

public class TestMono : MonoBehaviour
{
    void Start()
    {
        Console.Command("print 'Hello World'");   // output: 
    }
}`;