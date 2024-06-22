'use server';

export async function sendFormData(formData: FormData) {
    const form = {
        name: formData.get('fullName'),
        email: formData.get('email'),
        waNumber: formData.get('waNumber'),
        tableType: formData.get('tableType'),
        package: formData.get('package'),
        isOpenTable: formData.get('isOpenTable') === 'on'
    }

    console.log(form)
}

export async function getPackageDate(args: string) {
    const res = await fetch("http://localhost:3000/api/v1/package", {
        method: 'POST',
        headers:{
          content: 'application/json'
        },
        body:JSON.stringify({
          tableType: args
        })
      }).then(res=> res.json());
    return res
}