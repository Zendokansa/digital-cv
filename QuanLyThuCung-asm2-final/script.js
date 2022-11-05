<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="style.css" rel="stylesheet">
    <script defer src="./script/storage.js"></script>

    <title>Quản lý thú cưng</title>
</head>

<body>
    <div class="container w-100 me-5 ms-5">
        <div class="left_nav_bar" style="width: 80px ;">
            <div class="close"><i class="bi bi-list icon"></i></div>
            <ul>
                <li>
                    <a href="index.html">
                        <i class="bi bi-house icon">
                            <span>Home</span>
                        </i>
                    </a>
                </li>
                <li><a href="./pages/data.html">
                        <i class="bi bi-file-text icon"></i>
                        <span>Data</span>
                    </a>
                </li>
                <li>
                    <a href="./pages/edit.html">
                        <i class="bi bi-pencil-square icon"></i>
                        <span>Edit pet</span>
                    </a>
                </li>
                <li>
                    <a href="./pages/search.html">
                        <i class="bi bi-search icon"></i>
                        <span>Search</span>

                    </a>
                </li>
                <li>
                    <a href="./pages/breed.html" .html">
                        <i class="bi bi-list-ul icon"></i>
                        <span>Breed</span>
                    </a>
                </li>
            </ul>
        </div>
        <!-- <div class="clear"></div> -->
    </div>

    <div class="row">
        <div class="col-md-12 content">
            <h1 class="h1"> pet Management</h1>
            <hr>
            <div class="container-fluid w-75 justify-content-center content">
                <div class="row  align-item-center">
                    <div class="col-md-2 align-self-center">Pet ID</div>
                    <div class="col-md-10">
                        <form class="form-control">
                            <input id="pet_id" type="text" placeholder="input ID" class="w-100 text-dark pet_id">
                        </form>
                    </div>
                </div>
                <div class="row  align-items-center">
                    <div class="col-md-2">Pet Name</div>
                    <div class="col-md-5">
                        <form class="form-control md-3">
                            <input id="pet_name" type="text" placeholder="Input Name" value="LONE"
                                class="w-100 text-dark pet_name">
                        </form>
                    </div>
                    <div class="col-md-1">Age</div>
                    <div class="col-md-4">
                        <form class="form-control" for="age">
                            <input type="text" placeholder="Input Age" class="w-100 pet_age" id="age">
                        </form>
                    </div>
                </div>
                <div class="row  align-items-center">
                    <div class="col-md-2">Type</div>
                    <div class="col-md-10">
                        <select class="form-control pet_type" id="pet_type">
                            <option class="bg-primary" selected>
                                Select type
                            </option>
                            <option class="dog" value="dog">dog</option>
                            <option class="dog" value="cat">cat</option>
                        </select>
                    </div>
                </div>
                <div class="row align-items-center">
                    <div class="col-md-2">Weight</div>
                    <div class="col-md-5">
                        <form for="weight" class="form-control">
                            <input class="w-100 form-control pet_weight" type="text" placeholder="Input Weight">
                        </form>
                    </div>
                    <div class="col-md-1">length</div>
                    <div class="col-md-4">
                        <form class="form-control">
                            <input type="text" class="w-100 pet_length" placeholder="Input Length">
                        </form>
                    </div>
                </div>
                <div class="row align-items-center">
                    <div class="col-md-2">Color</div>
                    <div class="col-md-5">
                        <input type="color" class="form-control pet_color">
                    </div>
                    <div class="col-md-1">Breed</div>
                    <div class="col-md-4">
                        <select class="form-control bg-warning pet_breed">
                            <option class="bg-secondary" value="select breed">Select Breed </option>

                        </select>
                    </div>
                </div>
                <div class="row align-items-center healthy">
                    <div class="col-md-2"></div>
                    <div class="col-md-10">
                        <div class="d-flex flex-row flex-wrap gy-2 justify-content-end ">
                            <div class="me-3">
                                <input type="checkbox" class="vaccined"> Vaccinated
                            </div>
                            <div class="me-3">
                                <input type="checkbox" class="dewormed"> Dewormed
                            </div>
                            <div>
                                <input type="checkbox" class="sterillized"> Sterilized
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-fex flex-row flex-wrap">
                    <div class="w-25 d-inline btn-bar">
                        <button class="btn btn-primary" type="button" id="submit">Submit</button>
                        <button class="btn btn-warning btn_detail" type="button">Show Healthy
                            Pet</button>
                    </div>
                </div>
            </div>

        </div>
    </div>

    </div>
    <div class="container-fluid w-50 justify-content-center show-detail hidden">
        <div class="row me-2 ms-2">
            <div class="col-md-8">
                <form for="search" class="form-control">
                    <input type="search" class="search w-100" placeholder="What's your pet Name?">
                </form>
            </div>
            <div class="col-md-4">
                <input type="button" class="btn btn-search btn-dark" value="search">
            </div>
        </div>
    </div>
    <script defer src="./script.js"></script>
</body>


</html>
