using System;
using System.Collections.Generic;
using System.IO;


string filePath = "./input.txt";
string directions;

try
{
    directions = File.ReadAllText(filePath).Trim();
}
catch (IOException e)
{
    Console.WriteLine($"Error reading the file: {e.Message}");
    return;
}

HashSet<String> santaVisitedHouses = new HashSet<String>();
HashSet<String> robotVisitedHouses = new HashSet<String>();

int x = 0;
int y = 0;

santaVisitedHouses.Add($"{x},{y}");
robotVisitedHouses.Add($"{x},{y}");

for (int i = 0; i < directions.Length; i = i + 2)
{
    switch (directions[i])
    {
        case '^':
            y++;
            break;
        case 'v':
            y--;
            break;
        case '<':
            x--;
            break;
        case '>':
            x++;
            break;
    }
    santaVisitedHouses.Add($"{x},{y}");

    int j = i + 1;
    switch (directions[j])
    {
        case '^':
            y++;
            break;
        case 'v':
            y--;
            break;
        case '<':
            x--;
            break;
        case '>':
            x++;
            break;
    }
    robotVisitedHouses.Add($"{x},{y}");

}

int santaCounter = 0;
foreach (var house in santaVisitedHouses)
{
    if ((!robotVisitedHouses.Contains(house)))
    {
        santaCounter += 1;
    }
}

int robotCounter = 0;
foreach (var house in robotVisitedHouses)
{
    if ((!santaVisitedHouses.Contains(house)))
    {
        robotCounter += 1;
    }
    robotCounter += 1;
}

Console.WriteLine(santaCounter + robotCounter);


