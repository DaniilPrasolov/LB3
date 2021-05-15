function Min(){
    d=document
    var X = Number(d.form1.X.value)
    var Y = Number(d.form1.Y.value)
    var Z = Math.Min(X,Y)
    d.form1.Z.value=Z;
}