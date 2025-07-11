class Invertedhalfpyramid{
    public static void main(String[] args) {
        int i,j,n=4;
        //for rows printing
        for(i=1;i<=n;i++){
            //for printing spaces
            for(j=1;j<=n-i;j++){
                System.out.print(" ");
            }
                //for printing star
                for(j=1;j<=i;j++){
                    System.out.print("*");
                }
                //for new line after every rows
                System.out.println();
        }
}
}