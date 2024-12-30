  import java.util.Scanner;
  public class Main{
   public static void main(String[] args){

      Scanner sc = new Scanner(System.in);
      System.out.println("Enter strigs:");
      String str = sc.nextLine();
      System.out.print(str);
     
      System.out.println("Enter the a numbver");
      int a = sc.nextInt();
      System.out.println("Enter the number of b");
      int b = sc.nextInt();
      int sum = a + b;
      System.out.println("The sum of a + b =" + sum );
        /*
      System.out.println("try  to print star");
      System.out.print("Enter the row  numbers:");
      int m = sc.nextInt();
      System.out.print("Enter the column number: " );
      int n = sc.nextInt();
      int m = 5;
      //int n = 5;
     // int star = sc.nextInt();
      for(int i = 1; i <= m; i++){
         for(int j = 1; j <= n; j++){
         System.out.print("*");
         }
         System.out.println();
      }
         */
      //System.out.print("Enter yout name:");
     
      
   }
    }