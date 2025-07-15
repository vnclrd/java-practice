public class Prac {
    public static void main(String[] args) {

        System.out.println("Hello, World!");
        System.out.println("My name is Ivan and I am learning Java.");

        System.out.println("");

        String fullName = "Miguel Ivan Calarde";
        System.out.print("This is my full name: ");
        System.out.print(fullName);

        System.out.println("");

        // int
        int age = 24;
        System.out.println("This is my age when I created this: " + age);

        System.out.println("");

        // double (int that can hold decimals)
        double androidShare = 81.7;
        System.out.println(androidShare);

        System.out.println("");

        // boolean
        boolean intsCanHoldDecimals = false;
        System.out.println(intsCanHoldDecimals);

        System.out.println("");

        // char
        char expectedGrade = 'A';
        System.out.println(expectedGrade);

        System.out.println("");
        
        System.out.println("\"Hello World\"");

        System.out.println("");

        System.out.println("This is a backslash: \\");

        System.out.println("");

        System.out.println("Hello\nGoodbye");
        /*
        Prints
        Hello
        Goodbye
        */

        System.out.println("");

        // String
        String openingLyrics = "Yesterday, all my troubles seemed so far away";
        System.out.println(openingLyrics);

        System.out.println("");

        // static checking
        int year = 2001;
        String title = "Shrek";
        char genre = 'C';
        double runtime = 1.58;
        boolean isPG = true;

        System.out.println("Year: " + year);
        System.out.println("Title: " + title);
        System.out.println("Genre: " + genre);
        System.out.println("Runtime: " + runtime + " hours");
        System.out.println("Is PG: " + isPG);
    }
}