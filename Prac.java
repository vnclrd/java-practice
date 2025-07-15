public class Prac {
    public static void main(String[] args) {

        System.out.println("Hello, World!");
        System.out.println("My name is Ivan and I am learning Java.");

        System.out.println("");

        String fullName = "Miguel Ivan Calarde";
        System.out.print("This is my full name: ");
        System.out.print(fullName);

        System.out.println("");

        // LESSON: Variables

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

        System.out.println("");

        // Correct naming conventions
        String firstName = "Samira";
        String lastName = "Smith";
        String emailAddress = "samira@google.com";
        int salaryExpectation = 100000;
        int yearOfBirth = 1955;

        System.out.println("First Name: " + firstName);
        System.out.println("Last Name: " + lastName);
        System.out.println("Email Address: " + emailAddress);
        System.out.println("Salary Expectation: $" + salaryExpectation);
        System.out.println("Year of Birth: " + yearOfBirth);

        System.out.println("");

        // LESSON: Manipulating Variables
        int mystery1 = 8 + 6;
        int mystery2 = 8 - 6;

        System.out.println(mystery1);
        System.out.println(mystery2);

        System.out.println("");

        int zebrasInZoo = 8;
        int giraffesInZoo = 4;

        int animalsInZoo = zebrasInZoo + giraffesInZoo;
        System.out.println(animalsInZoo);

        int numZebrasAfterTrade = zebrasInZoo - 2;
        System.out.println(numZebrasAfterTrade);

        System.out.println("");

        // Multiplication and Division
        double subtotal = 30;
        double tax = 0.0875;

        double total = subtotal + (subtotal * tax);
        System.out.println(total);

        double perPerson = total / 4;
        System.out.println(perPerson);
    }
}