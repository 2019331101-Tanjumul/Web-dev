#include <bits/stdc++.h> 
using namespace std; 
int main (){ 

    int x = 10; 
    int* ptr = &x; 
    cout << "Value of the x :" << x << endl; 
    cout<< "Address of the x :" << &x << endl; 
    cout<< "Pointer value address :"  <<ptr << endl;
    cout<< "Pointer dereference (*ptr) : "<<*ptr << endl; 
   
    *ptr = 20; 

    cout<< "New value of x : " << x << endl; 

    return  0; 


}