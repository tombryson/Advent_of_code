import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Day2 {

    public static void main(String[] args) {

        String filePath = "input.txt";

        try (BufferedReader bufferedReader = new BufferedReader(new FileReader(filePath))) {

            List<String> lines = new ArrayList<>();
            String line;

            while ((line = bufferedReader.readLine()) != null) {
                lines.add(line);
            }

            String[] stringArray = lines.toArray(new String[0]);

            int totalWrappingPaper = 0;

            for (String str : stringArray) {
                String[] parts = str.split("x");

                int l = Integer.parseInt(parts[0]);
                int w = Integer.parseInt(parts[1]);
                int h = Integer.parseInt(parts[2]);

                totalWrappingPaper += ribbonRequired(l, w, h);
            }

            System.out.println(totalWrappingPaper);

        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static int ribbonRequired(int l, int w, int h) {

        int[] ribbonArray = { (l), (w), (h) };

        Arrays.sort(ribbonArray);

        int minSide = ribbonArray[0];
        int midSide = ribbonArray[1];

        int ribbonWrap = 2 * (minSide + midSide);
        int bowWrap = l * w * h;

        return ribbonWrap + bowWrap;
    }
}
