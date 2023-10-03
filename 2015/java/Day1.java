import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class Day1 {

    public static void main(String[] args) {

        String filePath = "input.txt";

        try (BufferedReader bufferedReader = new BufferedReader(new FileReader(filePath))) {

            String line = bufferedReader.readLine();

            char[] charArray = line.toCharArray();

            int result = countParenthesis(charArray);

            System.out.println(result);

        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static int countParenthesis(char[] charArray) {

        int counter = 0;

        for (int i = 0; i < charArray.length; i++) {
            char c = charArray[i];
            if (c == '(') {
                counter += 1;
            } else if (c == ')') {
                counter -= 1;
            }
            if (counter == -1) {
                return i;
            }
        }
        return counter;
    }

}
