#include <stdio.h>
#include <stdlib.h>


typedef struct aluno Aluno;
struct {
char * nome;
int idade:
Aluno *prox;
}aluno;

int main () {
int b = 5;
int *a = b;
//printf("%p",a);
printf("\nOk");

Aluno a,b;

a.prox = b;


}


/*printf("Digite um número ");
    scanf("%d",&a);
    printf("Digite mais um número ");
    scanf("%d",&b);
    total = a+b;
    printf("O resultado é: %d",total);*/

